import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header fixed flex justify-between w-full p-4 z-10 bg-slate-400'>
        <h1><Link className="text-[1.5rem] font-semibold" to='/'>AYOMI</Link></h1>
        <div className='w-[55%]'>
            <ul className='hidden justify-around w-full '>
                <li><NavLink className='text-white' to="/">Home</NavLink></li>
                <li><NavLink className='text-white' to="/about">About</NavLink></li>
                <li><NavLink className='text-white' to="/projects">Projects</NavLink></li>
                <li><NavLink className='text-white' to="/skills">Skills</NavLink></li>
                <li><NavLink className='text-white' to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header