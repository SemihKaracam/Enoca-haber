import React, { useState } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import "./header.css"
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png"
function Header() {
  const handleToggle = (e)=>{
    e.target.style.display = "none"
  }
  return (
    <header>
      <NavLink to="/"><h1 className='header-title'>SEMİH EMİR KARAÇAM</h1></NavLink>
      <Searchbar/>
      <div onClick={handleToggle} className='menu-icon'>
        <img src={menu} alt="" />
      </div> 
    </header>
  )
}

export default Header
