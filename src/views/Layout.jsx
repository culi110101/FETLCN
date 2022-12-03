import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import Header from '../components/layer/Header';
import Footer from '../components/layer/Footer';
import socket from '../socket/socket';
import { getProfileAction } from '../store/entities/user';
import useLocalStorage from '../hooks/useLocalStorage';

const RootStyle = styled('div')({
    minHeight: '100%',
    overflow: 'hidden'
});

const API_KEY = process.env.REACT_APP_STREAM_API_KEY;


const Layout = () => {
    const dispatch = useDispatch();
    const [sessionId] = useLocalStorage('sessionId', null);
    const [token,] = useLocalStorage('job', null);
    const [streamToken] = useLocalStorage('streamToken', null);
    const [userData] = useLocalStorage('user', null);
    const [notifications, setNotifications] = useState([]);
    const [unreadMessages, setUnreadMessages] = useState(0);
    const [unreadStreamMessages, setUnreadStreamMessages] = useState(0);
    const { user } = useSelector(state => state.user.getProfile);
    const [client, setClient] = useState(null);

    useEffect(() => {
        if (token && !user) {
            dispatch(getProfileAction())
        }
    }, [token, user]);

    useEffect(() => {
        if (userData !== null && streamToken !== null) {
            console.log(userData, streamToken);
            let didUserConnectInterrupt = false;
            const clientChat = StreamChat.getInstance(API_KEY);

            const connectionPromise = clientChat.connectUser(userData, streamToken).then(() => {
                if (!didUserConnectInterrupt) setClient(clientChat);
            });

            return () => {
                didUserConnectInterrupt = true;
                setClient(null);

                connectionPromise
                    .then(() => clientChat.disconnectUser())
                    .then(() => {
                         console.log('connection closed');
                });
            }
        }
    }, [userData, streamToken]);

    useEffect(() => {
        if (user) {
            if (sessionId) {
                socket.auth = { sessionId };
                socket.connect();                
            } else {
                socket.auth = { userId: user.id };
                socket.connect();

                socket.on("session", ({ sessionId, socketId }) => {
                    console.log("listen session event")
                    socket.auth = { sessionId };
                    localStorage.setItem('sessionId', JSON.stringify(sessionId));
                    socket.socketId = socketId;
                });
            }

            socket.on('notifications', ({ notifications, newMessages }) => {
                console.log('listen on notifications')
                setNotifications(notifications);
                setUnreadMessages(newMessages);
            });

            socket.on('apply job', (message) => {
                console.log('listen on apply job')
                setUnreadMessages(prev => prev + 1);
                setNotifications(prev => [...prev, message]);
            });

            socket.on("connect_error", (err) => {
                if (err.message === "invalid userId") {
                    console.log("Your are not logged in")
                }
            });

            return () => {
                socket.off("session");
                socket.off("notifications");
                socket.off("apply job");
                socket.off("read");
                socket.off("connect_error");
            }
        }

    }, [user, sessionId]);

    const handleReadMessages = () => {
        setUnreadMessages(0);
        setNotifications(prev => prev.map((notification) => ({ ...notification, isRead: true })));
    };

    if (client) {
        return (
            <RootStyle>
                <Chat client={client}>
                    <Header
                        user={user}
                        notifications={notifications}
                        handleRead={handleReadMessages}
                        unreadMessages={unreadMessages}
                        unreadStreamMessages={unreadStreamMessages}
                    />
                    <Outlet />
                    <Footer />
                </Chat>
            </RootStyle>
        )
    }

    return (
        <RootStyle>
            <Header
                user={user}
                notifications={notifications}
                handleRead={handleReadMessages}
                unreadMessages={unreadMessages}
            />
            <Outlet />
            <Footer />
        </RootStyle>
    );
};

export default Layout;