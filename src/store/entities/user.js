import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'

// get profile
const initStateGetProfile = {
    loading: false,
    success: false,
    message: '',
    user: null,
    freelancer: null,
    employer: null
}

export const getProfileAction = createAsyncThunk(
    'getProfile',
    async () => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('job'))}`
                }
            }
            const { data } = await axios.get(`${apiUrl}/users/profile`, config);
            if (data.user){
                if (data.employer){
                    localStorage.setItem('role', "Employer")
                }
                else{
                    localStorage.setItem('role', "Freelancer")
                }
            }
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getProfileSlice = createSlice({
    name: 'getProfile',
    initialState: initStateGetProfile,
    extraReducers: (builder) => {
        builder.addCase(getProfileAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProfileAction.fulfilled, (state, data) => {
            const { user, freelancer, employer } = data.payload;
            
            const userData = {
                id: user.id,
                email: user.email,
                image: user.image
            };

            if (employer) {
                userData.name = employer.companyName;
            } else {
                userData.name = freelancer.firstName + freelancer.lastName;
            }

            localStorage.setItem('user', JSON.stringify(userData));
            
            state.loading = false
            state.success = data.payload.success
            state.user = data.payload.user
            state.employer = data.payload.employer
            state.freelancer = data.payload.freelancer
        })
        builder.addCase(getProfileAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})


// update profile
const initStateUpdateProfile = {
    loading: false,
    success: false,
    message: '',
    user: {}
}

export const updateProfileAction = createAsyncThunk(
    'updateProfile',
    async (profileData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.put(`${apiUrl}/user/profile`, profileData, config)
            console.log(data)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const updateProfileSlice = createSlice({
    name: 'updateProfile',
    initialState: initStateUpdateProfile,
    extraReducers: (builder) => {
        builder.addCase(updateProfileAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateProfileAction.fulfilled, (state, data) => {
            state.loading = false
            state.success = data.payload.success
            state.user = data.payload.user
        })
        builder.addCase(updateProfileAction.rejected, (state, data) => {
            state.loading = false
            state.success = false
            state.message = data.payload.message
        })
    }
})


// reducers
const userReducer = combineReducers({
    getProfile: getProfileSlice.reducer,
    updateProfile: updateProfileSlice.reducer
})

export default userReducer