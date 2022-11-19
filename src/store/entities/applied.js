import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// add apply
const initStateAddApplied = {
    loading: false,
    success: false,
    message: '',
    applied: {}
}

export const addAppliedAction = createAsyncThunk(
    'add applied',
    async (appliedData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/applied/add`, config, appliedData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const addAppliedSlice = createSlice({
    name: 'addApplied',
    initialState: initStateAddApplied,
    extraReducers: (builder) => {
        builder.addCase(addAppliedAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(addAppliedAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.applied = data.payload.applied
        })
        builder.addCase(addAppliedAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// cancel apply
const initStateCancelApplied = {
    loading: false,
    success: false,
    message: ''
}

export const cancelAppliedAction = createAsyncThunk(
    'cancel applied',
    async (jobId) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.delete(`${apiUrl}/applied/cancel/${jobId}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const cancelAppliedSlice = createSlice({
    name: 'cancelApplied',
    initialState: initStateCancelApplied,
    extraReducers: (builder) => {
        builder.addCase(cancelAppliedAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(cancelAppliedAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(cancelAppliedAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// get applied by jobs
const initStateGetAppliedsByJob = {
    loading: false,
    success: false,
    message: '',
    applieds: []
}

export const getAppliedsByJobAction = createAsyncThunk(
    'get applieds',
    async ({num, page}) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.delete(`${apiUrl}/applied/myJob?page=${page}&num=${num}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getAppliedsByJobSlice = createSlice({
    name: 'get applieds',
    initialState: initStateGetAppliedsByJob,
    extraReducers: (builder) => {
        builder.addCase(getAppliedsByJobAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAppliedsByJobAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.applieds = data.payload.applies
        })
        builder.addCase(getAppliedsByJobAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const appliedReducer = combineReducers({
    addApplied: addAppliedSlice.reducer,
    cancalApplied: cancelAppliedSlice.reducer,
    getAppliedsByJob: getAppliedsByJobSlice.reducer
})

export default appliedReducer