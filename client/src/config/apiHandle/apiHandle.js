import axios from "axios"

export const baseURL = process.env.REACT_APP_API_URL


export const axios_handle = axios.create({
    baseURL: `${baseURL}`,
})

axios_handle.defaults.timeout = 15000;

axios_handle.interceptors.request.use(async req => {

    return req

})

