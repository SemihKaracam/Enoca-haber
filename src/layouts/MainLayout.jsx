import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import "./mainlayout.css"
function MainLayout() {
  return (
    <div>
      <div className='top-container' style={{position:"relative"}}>
        <Header/> 
        <Navbar/>
      </div>
      <Outlet/>
    </div>
  )
}

export default MainLayout