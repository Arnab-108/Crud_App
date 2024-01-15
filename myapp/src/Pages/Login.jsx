import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { loginAction } from '../Redux/AuthReducer/action'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
export const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {auth,isLoading} = useSelector((store)=> store.authReducer)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(state)
    const dispatch = useDispatch()
    console.log(location)
    const handleClick=(e)=>{
        e.preventDefault()
        const obj={
            email,
            password
        }
        dispatch(loginAction(obj)).then(()=>{
            alert("Login Successfull!")
            navigate(location.state, {replace:true})
        })
        setEmail("")
        setPassword("")
    }
  return (
    <>
        <DIV>
            <h2>Login</h2>
            <h3>{auth ? "Login Successfull!" : "Need to login first!!"}</h3>
            <form>
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
                <button onClick={handleClick}>Login</button>
            </form>
        </DIV>
    
    </>
)
}

const DIV = styled.div`
width: 40vh;
margin: 40px auto;
border: 1px solid grey;
padding: 10px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    input{
        width: 95%;
        height: 40px;
        font-size: medium;
    }

    button{
        width: 30%;
        height: 40px;
    }
`;