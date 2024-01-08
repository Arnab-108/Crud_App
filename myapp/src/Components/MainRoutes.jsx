import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../Pages/Homepage'
import { Login } from '../Pages/Login'
import { Admin } from '../Pages/Admin'

export const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='*' element={<h1>404 Page not found</h1>} />

        </Routes>
    
    </>
  )
}
