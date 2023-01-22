import React, { useState } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import "./header.css"
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png"
function Header() {
  const [toggle,setToggle] = useState(false)
  const handleToggle = (e)=>{
    e.target.style.display = "none"
  }
  return (
    <header>
      <NavLink to="/"><h1 className='header-title'>SEMİH EMİR KARAÇAM</h1></NavLink>
      <Searchbar/>
      {
        toggle ?
        <div onClick={handleToggle} className='menu-icon'>
          <img src={menu} alt="" />
        </div> : <div onClick={handleToggle} className='close-icon'>X</div>
      }
    </header>
  )
}

export default Header