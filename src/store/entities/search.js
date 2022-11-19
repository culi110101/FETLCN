import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// search all
const initStateSearch = {
    loading: false,
    jobs: [],
    freelancers: [],
    employers: []
}

export const searchAction = createAsyncThunk(
    'search',
    async (searchData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/search`, searchData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const searchSlice = createSlice({
    name: 'search',
    initialState: initStateSearch,
    extraReducers: (builder) => {
        builder.addCase(searchAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(searchAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.jobs = data.payload.jobs
            state.freelancers = data.payload.freelancers
            state.employers = data.payload.employers
        })
        builder.addCase(searchAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const searchReducer = combineReducers({
    search: searchSlice.reducer
})

export default searchReducer