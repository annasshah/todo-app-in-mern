import { createSlice } from '@reduxjs/toolkit'
import { async_status } from '../../utils/contants'
import { add_todo_async, get_todo_async } from '../../services/todo_service'

const initialState = {
    get_all_todos_status: async_status.IDLE,
    add_todo_status: async_status.IDLE,
    edit_todo_status: async_status.IDLE,
    delete_todo_status: async_status.IDLE,

    todos_data: null,


    get_all_todos_status_error: null,
    add_todo_error: null,
    edit_todo_error: null,
    delete_todo_error: null,

}
const todo_slice = createSlice({
    name: 'todo_slice',
    initialState: initialState,
    reducers: {


    },
    extraReducers: (builder) => {

        // Get all Todos
        builder.addCase(get_todo_async.pending, (state, action) => {
            state.get_all_todos_status = async_status.LOADING
            state.get_all_todos_status_error = null
        })


        builder.addCase(get_todo_async.fulfilled, (state, { payload }) => {
            state.get_all_todos_status = async_status.SUCCEEDED
            state.todos_data = payload.data
        })

        builder.addCase(get_todo_async.rejected, (state, actions) => {
            state.get_all_todos_status = actions.error
            state.add_todo_status = async_status.ERROR
        })


        // Add Todos
        builder.addCase(add_todo_async.pending, (state, action) => {
            state.get_all_todos_status = async_status.LOADING
            state.get_all_todos_status_error = null
        })


        builder.addCase(add_todo_async.fulfilled, (state, { payload }) => {
            state.add_todo_status = async_status.SUCCEEDED
            state.todos_data = payload.data
        })

        builder.addCase(add_todo_async.rejected, (state, actions) => {
            state.add_todo_error = actions.error
            state.add_todo_status = async_status.ERROR
        })



       
    }
})


export const { set_initial_auth_false } = todo_slice.actions

export default todo_slice.reducer


