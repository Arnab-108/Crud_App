import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { loginAction } from '../Redux/AuthReducer/action'
export const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const state = useSelector((store)=> store.authReducer)

    console.log(state)
    const dispatch = useDispatch()
    
    const handleClick=(e)=>{
        e.preventDefault()
        const obj={
            email,
            password
        }
        dispatch(loginAction(obj))
        setEmail("")
        setPassword("")
    }
  return (
    <>
        <DIV>
            <h2>Login</h2>
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