import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const initState={
    isLoading:false,
    isError:false,
    auth:false,
    token:""
}

export const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state , isLoading:true}
        case LOGIN_SUCCESS:
            return {...state , isLoading:false , auth:true , token:payload}
        case LOGIN_FAIL:
            return {...state , isLoading:false , isError:true}
        default:
            return state
    }
}