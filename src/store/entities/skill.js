import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// search all
const initStateGetSkills = {
    loading: false,
    jobs: [],
    freelancers: [],
    employers: []
}

export const getSkillsAction = createAsyncThunk(
    'get skills',
    async ({page, num}) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.get(`${apiUrl}/skill/show?page=${page}&num=${num}`)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getSkillsSlice = createSlice({
    name: 'search',
    initialState: initStateGetSkills,
    extraReducers: (builder) => {
        builder.addCase(getSkillsAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getSkillsAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.skills = data.payload.skills
        })
        builder.addCase(getSkillsAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const skillReducer = combineReducers({
    getSkills: getSkillsSlice.reducer
})

export default skillReducer