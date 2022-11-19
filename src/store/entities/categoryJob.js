import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// add categories job
const initStateAddCategoriesJob = {
    loading: false,
    categories: []
}


export const addCategoriesJobAction = createAsyncThunk(
    'add categories job',
    async (categoriesJobData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/categoryJob`, config, categoriesJobData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const addCategoriesJobSlice = createSlice({
    name: 'add categories job',
    initialState: initStateAddCategoriesJob,
    extraReducers: (builder) => {
        builder.addCase(addCategoriesJobAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(addCategoriesJobAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.categories = data.payload.categories
        })
        builder.addCase(addCategoriesJobAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const categoryJobReducer = combineReducers({
    addCategoriesJob: addCategoriesJobSlice.reducer

})

export default categoryJobReducer