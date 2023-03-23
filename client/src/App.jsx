import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Layout/Navbar'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default App