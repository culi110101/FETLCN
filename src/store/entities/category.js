import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// get categories
const initStateGetCategories = {
    loading: false,
    categories: []
}


export const getCategoriesAction = createAsyncThunk(
    'get categories',
    async ({page, num}) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.get(`${apiUrl}/categories?page=${page}&num=${num}`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getCategoriesSlice = createSlice({
    name: 'get categories',
    initialState: initStateGetCategories,
    extraReducers: (builder) => {
        builder.addCase(getCategoriesAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoriesAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.categories = data.payload.categories
        })
        builder.addCase(getCategoriesAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const categoryReducer = combineReducers({
    getCategories: getCategoriesSlice.reducer
})

export default categoryReducer