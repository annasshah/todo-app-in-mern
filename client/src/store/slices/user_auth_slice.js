import { createSlice } from '@reduxjs/toolkit'
import { check_user_auth_async, user_login_async } from '../../services/auth_service'
import { async_status, user_auth_token } from '../../utils/contants'

const initialState = {
    initial_auth_check_status: async_status.IDLE,
    login_status: async_status.IDLE,
    signup_status: async_status.IDLE,
    logout_status: async_status.IDLE,

    user_auth: false,
    user_data: null,


    initial_auth_check_error: null,
    login_error: null,
    signup_error: null,
    logout_error: null,

}

const user_auth_slice = createSlice({
    name: 'user_auth',
    initialState: initialState,
    reducers: {


    },
    extraReducers: (builder) => {

        // Check Initial Auth
        builder.addCase(check_user_auth_async.pending, (state, action) => {
            state.initial_auth_check_status = async_status.LOADING
            state.initial_auth_check_error = null
        })


        builder.addCase(check_user_auth_async.fulfilled, (state, { payload }) => {
            state.user_auth = payload.success
            state.initial_auth_check_status = async_status.SUCCEEDED
            state.user_data = payload.data
            state.initial_auth_check_error = null
        })

        builder.addCase(check_user_auth_async.rejected, (state, actions) => {
            if (actions.payload.success === false) {
                state.user_auth = false
            }
            state.initial_auth_check_error = actions.error
            state.initial_auth_check_status = async_status.ERROR
        })



        // Login User
        builder.addCase(user_login_async.pending, (state, action) => {
            state.login_status = async_status.LOADING
            state.login_error = null
        })


        builder.addCase(user_login_async.fulfilled, (state, { payload }) => {
            state.user_auth = payload.success
            state.login_status = async_status.SUCCEEDED
            state.user_data = payload.data
            state.login_error = null

            localStorage.setItem(user_auth_token, payload.token)
        })

        builder.addCase(user_login_async.rejected, (state, {payload, error}) => {
            state.login_error = error
            state.login_status = async_status.ERROR
        })
    }
})


export const { set_initial_auth_false } = user_auth_slice.actions

export default user_auth_slice.reducer


