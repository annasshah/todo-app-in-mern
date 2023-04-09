import { createAsyncThunk } from "@reduxjs/toolkit"
import { type_constants } from "../utils/contants"
import { axios_handle } from "../config/apiHandle/apiHandle"

export const get_todo_async = createAsyncThunk(type_constants.GET_TODOS, async (post_data) => {

    try {
        const res = await axios_handle.get('/todo')
        const data = await res.data  
        return data
    } catch (error) {
        if (error?.response?.data) {
            throw Error(error.response.data.message)
        }
        else {
            throw Error(error.message)
        }
    }
})


export const add_todo_async = createAsyncThunk(type_constants.ADD_TODO, async (post_data) => {

    try {
        const res = await axios_handle.post('/todo',post_data)
        const data = await res.data  
        return data
    } catch (error) {
        if (error?.response?.data) {
            throw Error(error.response.data.message)
        }
        else {
            throw Error(error.message)
        }
    }
})