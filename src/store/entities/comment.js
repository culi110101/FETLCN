import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// add comment
const initStateAddComment = {
    loading: false,
    success: false,
    message: '',
    comment: {}
}

export const addCommentAction = createAsyncThunk(
    'add comment',
    async (commentData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/comment/add`, config, commentData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const addCommentSlice = createSlice({
    name: 'add comment',
    initialState: initStateAddComment,
    extraReducers: (builder) => {
        builder.addCase(addCommentAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(addCommentAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.comment = data.payload.comment
        })
        builder.addCase(addCommentAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// get my comments
const initStateGetMyComments = {
    loading: false,
    success: false,
    message: '',
    postedComments: [],
    isPostedComments: []
}

export const getMyCommentsAction = createAsyncThunk(
    'get my comments',
    async () => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.get(`${apiUrl}/comment/my`, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getMyCommentsSlice = createSlice({
    name: 'get my comments',
    initialState: initStateGetMyComments,
    extraReducers: (builder) => {
        builder.addCase(getMyCommentsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getMyCommentsAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.postedComments = data.payload.postedComments
            state.isPostedComments = data.payload.isPostedComments
        })
        builder.addCase(getMyCommentsAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})



// edit comment
const initStateEditComment = {
    loading: false,
    success: false,
}

export const editCommentAction = createAsyncThunk(
    'edit comment',
    async (commentData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.put(`${apiUrl}/comment/edit`, config, commentData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const editCommentSlice = createSlice({
    name: 'edit comment',
    initialState: initStateEditComment,
    extraReducers: (builder) => {
        builder.addCase(editCommentAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(editCommentAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(editCommentAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const commentReducer = combineReducers({
    addComment: addCommentSlice.reducer,
    getMyComments: getMyCommentsSlice.reducer,
    editCommentSlice: editCommentSlice.reducer
})

export default commentReducer



