import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login'
import { Signup } from '../../pages/Signup'



const Public_Routes = () => {

  const { user_auth } = useSelector(state => state.user_auth)
  return (
    !user_auth ? <Outlet /> : <Navigate to='/' />
  )

}
const Private_Routes = () => {

  const { user_auth } = useSelector(state => state.user_auth)


  return (
    user_auth ? <Outlet /> : <Navigate to='/login' />
  )

}


export const RouterApp = () => {

  const { user_auth } = useSelector(state => state.user_auth)

  return (
    <Container maxWidth={false}>
      <Router>
        <Routes>
          <Route element={<Private_Routes />}>
            <Route element={<Home />}   path='/' />
          </Route>

          <Route element={<Public_Routes />}>
            <Route element={<Login />} path='/login'  />
            <Route element={<Signup />} path='/signup' />
          </Route>
        </Routes>
      </Router>
    </Container>
  )
}
