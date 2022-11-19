import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// get packages
const initStateGetPackages = {
    success: false,
    packages: []
}

export const getPackagesAction = createAsyncThunk(
    'get packages',
    async (num) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.get(`${apiUrl}/packages?num=${num}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getPackagesSlice = createSlice({
    name: 'get packages',
    initialState: initStateGetPackages,
    extraReducers: (builder) => {
        builder.addCase(getPackagesAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getPackagesAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.packages = data.payload.packages
        })
        builder.addCase(getPackagesAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const packageReducer = combineReducers({
    getPackages: getPackagesSlice.reducer
})

export default packageReducer