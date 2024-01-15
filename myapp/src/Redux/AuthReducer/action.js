import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"


export const loginAction=(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",obj).then((res)=>{
        console.log(res)
        dispatch({type:LOGIN_SUCCESS, payload:res.data.token})
    }).catch((err)=>{
        dispatch({type:LOGIN_FAIL})
    })

}