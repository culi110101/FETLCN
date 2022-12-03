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
            const {data} = await axios.put(`${apiUrl}/freelancer/edit`, employerData, config)
            return data
        }
        catch(error){
            console.log(error)
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

// get info freelancer
const initStateGetInfoFreelancer = {
    loading: false,
    userShow: {},
    freelancer: {}
}

export const getInfoFreelancerAction = createAsyncThunk(
    'get info freelancer',
    async (id) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.get(`${apiUrl}/freelancer/info?id=${id}`)
            return data
        }
        catch(error){
            console.log(error)
            return error.response.data
        }
    }
)

export const getInfoFreelancerSlice = createSlice({
    name: 'get info freelancer',
    initialState: initStateGetInfoFreelancer,
    extraReducers: (builder) => {
        builder.addCase(getInfoFreelancerAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getInfoFreelancerAction.fulfilled, (state, data) => {
            state.loading = false
            state.userShow = data.payload.user
            state.freelancer = data.payload.freelancer
        })
        builder.addCase(getInfoFreelancerAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})


// get freelancers
const initStateGetFreelancers = {
    loading: false,
    freelancers: [],
    freelancersSkills: [],
    numComments: []
}

export const getFreelancersAction = createAsyncThunk(
    'get freelancers',
    async () => {
        try{
            /* const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            } */
            const {data} = await axios.get(`${apiUrl}/freelancer`)
            console.log("doing")
            console.log(data)
            return data
        }
        catch(error){
            console.log(error)
            return error.response.data
        }
    }
)

export const getFreelancersSlice = createSlice({
    name: 'get freelancers',
    initialState: initStateGetFreelancers,
    extraReducers: (builder) => {
        builder.addCase(getFreelancersAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getFreelancersAction.fulfilled, (state, data) => {
            state.loading = false
            state.freelancers = data.payload.freelancers
            state.freelancersSkills = data.payload.freelancersSkills
            state.numComments = data.payload.numComments
        })
        builder.addCase(getFreelancersAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const freelancerReducer = combineReducers({
    registerFreelancer: registerFreelancerSlice.reducer,
    editFreelancer: editFreelancerSlice.reducer,
    getInfoFreelancer: getInfoFreelancerSlice.reducer,
    getFreelancers: getFreelancersSlice.reducer
})

export default freelancerReducer