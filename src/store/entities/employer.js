import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// register employer
const initStateRegisterEmployer = {
    loading: false,
    success: false
}

export const registerEmployerAction = createAsyncThunk(
    'register employer',
    async (employerData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/employer/register`, config, employerData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const registerEmployerSlice = createSlice({
    name: 'register employer',
    initialState: initStateRegisterEmployer,
    extraReducers: (builder) => {
        builder.addCase(registerEmployerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerEmployerAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(registerEmployerAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})


// edit employer
const initStateEditEmployer = {
    loading: false,
    success: false
}

export const editEmployerAction = createAsyncThunk(
    'edit employer',
    async (employerData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.put(`${apiUrl}/employer/edit`, config, employerData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const editEmployerSlice = createSlice({
    name: 'edit employer',
    initialState: initStateEditEmployer,
    extraReducers: (builder) => {
        builder.addCase(editEmployerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(editEmployerAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(editEmployerAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const employerReducer = combineReducers({
    registerEmployer: registerEmployerSlice.reducer,
    editEmployer: editEmployerSlice.reducer
})

export default employerReducer