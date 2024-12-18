import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><NavLink to='/' className={(e)=>{
        return e.isActive? "active" : ""
      }}>Home</NavLink></li>
      <li><NavLink to='/about' className={(e)=>{
        return e.isActive? "active" : ""
      }}>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
