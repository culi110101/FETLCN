import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl, ACTION_STATUS } from '../../common/consts'

import api from '../api';

import axios from 'axios'

// login
const initStateLogin = {
    loading: false,
    success: false,
    message: ''
}

export const loginAction = createAsyncThunk(
    'login',
    async (loginData) => {
        try{
            const {data} = await axios.post(`${apiUrl}/account/login`, loginData)
            console.log(data)
            if (data.success){
                localStorage.setItem('job', JSON.stringify(data.accessToken));
            }
            return data
        }
        catch(error){
            console.log(error.response)
            return error.response.data
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState: initStateLogin,
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success;
            localStorage.setItem('streamToken', JSON.stringify(data.payload.streamToken));
        })
        builder.addCase(loginAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// change password
const initStateChangePassword = {
    loading: false,
    message: '',
    success: false
}

export const changePasswordAction = createAsyncThunk(
    'changePassword',
    async (passwordData) => {
        try{
            const {data} = await axios.put(`${apiUrl}/account/changePassword`, passwordData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const changePasswordSlice = createSlice({
    name: 'changePassword',
    initialState: initStateChangePassword,
    extraReducers: (builder) => {
        builder.addCase(changePasswordAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(changePasswordAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.message = data.payload.message
        })
        builder.addCase(changePasswordAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
});


const initialGetCurrentUserState = {
    status: ACTION_STATUS.IDLE,
    user: null,
    errorMessage: ''
};

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async () => {
        try {
            const { data } = await api.get('/users/profile');
            console.log(data);

            return data;
        }
        catch (error) {
            console.log(error);
            const message = (error.response && error.response.data && error.response.data.message) 
                || error.message || error.toString();

            return message;
        }
    }
);

const getCurrentUserSlice = createSlice({
    name: 'auth/getCurrentUser',
    initialState: initialGetCurrentUserState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentUser.pending, (state, action) => {
                state.status = ACTION_STATUS.LOADING;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.status = ACTION_STATUS.SUCCESSEED;
                state.user = action.payload.user;
                localStorage.setItem('user', JSON.stringify(action.payload.user));
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.status = ACTION_STATUS.FAILED;
                state.errorMessage = action.payload.error;
            })
    }
})


// reducers
const accountReducer = combineReducers({
    login: loginSlice.reducer,
    changePassword: changePasswordSlice.reducer,
    currentUser: getCurrentUserSlice.reducer
})

export default accountReducer