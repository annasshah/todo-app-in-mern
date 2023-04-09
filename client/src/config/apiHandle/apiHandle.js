import axios from "axios"
import { user_auth_token } from "../../utils/contants";

export const baseURL = process.env.REACT_APP_API_URL


export const axios_handle = axios.create({
    baseURL: `${baseURL}`,
})

axios_handle.defaults.timeout = 15000;

axios_handle.interceptors.request.use(async req => {

    const token = localStorage.getItem(user_auth_token)

    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    
    return req

})

