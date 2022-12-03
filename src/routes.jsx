import React from 'react';
import { useRoutes } from 'react-router-dom';

import Layout from './views/Layout';
import Auth from './views/Auth';
import ManageForCustomer from './views/ManageForCustomer';
import SearchList from './views/SearchList';
import ProfileUser from './views/ProfileUser';
import JobItemsLayer from './views/JobItemsLayer';
import ChatPage from './views/ChatPage';

const Router = () => {

    return (useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Auth />},
                { path: 'search', element: <SearchList />},
                { path: 'items', element: <JobItemsLayer />},
                { path: 'manageforcustomer', element: <ManageForCustomer />},
                { path: 'profile', element: <ProfileUser />},
                { path: 'chat', element: <ChatPage />}
            ],
        },
    ]));
}

export default Router;