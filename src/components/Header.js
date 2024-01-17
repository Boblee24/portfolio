import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header fixed flex justify-between w-full p-4'>
        <h1><NavLink className="text-[1rem]" to='/'>Ayomi</NavLink></h1>
        <div className='w-[60%]'>
            <ul className='flex justify-around w-full'>
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