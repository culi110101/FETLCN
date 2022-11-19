import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// add user skill
const initStateAddUserSkill = {
    loading: false,
    success: false
}

export const addUserSkillAction = createAsyncThunk(
    'add user skill',
    async (userSkillData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/userSkill/add`, config, userSkillData)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const addUserSkillSlice = createSlice({
    name: 'add user skill',
    initialState: initStateAddUserSkill,
    extraReducers: (builder) => {
        builder.addCase(addUserSkillAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(addUserSkillAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
        })
        builder.addCase(addUserSkillAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})

// reducer
const userSkillReducer = combineReducers({
    addUserSkill: addUserSkillSlice.reducer
})

export default userSkillReducer
