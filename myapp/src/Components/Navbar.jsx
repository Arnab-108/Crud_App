import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <>
        <DIV>
            <h2>My Shopping</h2>
            <Link to={"/"}>Homepage</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/admin"}>Admin</Link>
        </DIV>
    
    
    </>
  )
}


const DIV = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid gray;
`