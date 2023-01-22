import React from 'react'
import "./navbar.css"
import { NavLink } from "react-router-dom";
const categories = [
  "business","entertainment","general","health","science","sports","technology"
]
function Navbar() {

  return (
    <>
      <nav>
        <NavLink to="/" className='category-name'>home</NavLink>
        {
          categories.map((category)=>(
            <NavLink to={"category/"+category} className='category-name'>{category}</NavLink>
          ))
        }
        <NavLink to="hakkimda" className='category-name'>hakkimda</NavLink>
      </nav>      
    </>
  )
}

export default Navbar