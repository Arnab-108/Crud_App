import axios from "axios";
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS } from "./actionTypes";

export const addProduct = (obj)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCT_REQUEST})

    axios.post("http://localhost:8080/products",obj).then((res)=>{
        console.log(res)
        dispatch({type:ADD_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type: ADD_PRODUCT_FAILURE})
    })
}


export const getProduct =(obj)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCT_REQUEST})

    axios.get("http://localhost:8080/products",obj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS , payload:res.data})
    }).catch((err)=>{
        dispatch({type:ADD_PRODUCT_FAILURE})
    })
}