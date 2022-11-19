import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'
import { registerEmployerSlice } from './employer'

// create job
const initStateCreateJob = {
    loading: false,
    success: false,
    job: {}
}

export const createJobAction = createAsyncThunk(
    'create job',
    async (jobData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/job/create`, config, jobData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const createJobSlice = createSlice({
    name: 'create job',
    initialState: initStateCreateJob,
    extraReducers: (builder) => {
        builder.addCase(createJobAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createJobAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.job = data.payload.job
        })
        builder.addCase(createJobAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// find job by id
const initStateFindJobById = {
    loading: false,
    success: false,
    job: {}
}

export const findJobByIdAction = createAsyncThunk(
    'find job by id',
    async (jobId) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.get(`${apiUrl}/job/find?id=${jobId}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const findJobByIdSlice = createSlice({
    name: 'find job by id',
    initialState: initStateFindJobById,
    extraReducers: (builder) => {
        builder.addCase(findJobByIdAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(findJobByIdAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.job = data.payload.job
        })
        builder.addCase(findJobByIdAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})


// get jobs
const initStateGetJobs = {
    loading: false,
    success: false,
    jobs: []
}

export const getJobsAction = createAsyncThunk(
    'get jobs',
    async ({num, page}) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.get(`${apiUrl}/job/show?page=${page}&num=${num}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getJobsSlice = createSlice({
    name: 'get jobs',
    initialState: initStateGetJobs,
    extraReducers: (builder) => {
        builder.addCase(getJobsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getJobsAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.jobs = data.payload.jobs
        })
        builder.addCase(getJobsAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// get jobs
const initStateEditJob = {
    loading: false,
    success: false
}

export const editJobAction = createAsyncThunk(
    'get jobs',
    async (jobData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.put(`${apiUrl}/job/edit`, config, jobData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const editJobSlice = createSlice({
    name: 'get jobs',
    initialState: initStateEditJob,
    extraReducers: (builder) => {
        builder.addCase(editJobAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(editJobAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(editJobAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})


// get jobs by category
const initStateGetJobsByCategory = {
    loading: false,
    success: false,
    jobs: []
}

export const getJobsByCategoryAction = createAsyncThunk(
    'get jobs by category',
    async (categoryId) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.put(`${apiUrl}/job/category?id=${categoryId}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getJobsByCategorySlice = createSlice({
    name: 'get jobs by category',
    initialState: initStateGetJobsByCategory,
    extraReducers: (builder) => {
        builder.addCase(editJobAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(editJobAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.jobs = data.payload.jobs
        })
        builder.addCase(editJobAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// change status
const initStateChangeStatus = {
    loading: false,
    success: false
}

export const changeStatusAction = createAsyncThunk(
    'change status job',
    async (jobId) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.put(`${apiUrl}/job/status/${jobId}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const changeStatusSlice = createSlice({
    name: 'change status job',
    initialState: initStateChangeStatus,
    extraReducers: (builder) => {
        builder.addCase(editJobAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(editJobAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(editJobAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const jobReducer = combineReducers({
    createJob: createJobSlice.reducer,
    findJobById: findJobByIdSlice.reducer,
    getJobs: getJobsSlice.reducer,
    editJob: editJobSlice.reducer,
    getJobsByCategory: getJobsByCategorySlice.reducer,
    changeStatus: changeStatusSlice.reducer
})

export default jobReducer


