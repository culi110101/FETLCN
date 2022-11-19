import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

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
                localStorage.setItem('job', data.accessToken)
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
            state.success = data.payload.success
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
})

// reducers
const accountReducer = combineReducers({
    login: loginSlice.reducer,
    changePassword: changePasswordSlice.reducer
})

export default accountReducer