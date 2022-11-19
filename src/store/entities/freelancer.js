import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// register employer
const initStateRegisterFreelancer = {
    loading: false,
    success: false
}

export const registerFreelancerAction = createAsyncThunk(
    'register freelancer',
    async (freelancerData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/employer/register`, config, freelancerData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const registerFreelancerSlice = createSlice({
    name: 'register freelancer',
    initialState: initStateRegisterFreelancer,
    extraReducers: (builder) => {
        builder.addCase(registerFreelancerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerFreelancerAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(registerFreelancerAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})


// edit freelancer
const initStateEditFreelancer = {
    loading: false,
    success: false
}

export const editFreelancerAction = createAsyncThunk(
    'edit freelancer',
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

export const editFreelancerSlice = createSlice({
    name: 'edit freelancer',
    initialState: initStateEditFreelancer,
    extraReducers: (builder) => {
        builder.addCase(editFreelancerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(editFreelancerAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(editFreelancerAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const freelancerReducer = combineReducers({
    registerFreelancer: registerFreelancerSlice.reducer,
    editFreelancer: editFreelancerSlice.reducer
})

export default freelancerReducer