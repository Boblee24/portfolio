import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1><NavLink to='/'>Logo</NavLink></h1>
        <div>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header