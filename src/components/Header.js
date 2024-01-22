import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Harmbuger from './harmbuger'

const Header = () => {
  return (
    <div className='header fixed flex w-full p-3 z-10 bg-[#d7d7d7]'>
        <h1><Link className="text-[1.5rem] font-semibold" to='/'>AYOMI</Link></h1>
        <Harmbuger/>
        <div className=' absolute bg-[#d7d7d7] h-[100vh] w-full'>
            <ul className=' justify-around w-full flex gap-5 flex-col p-3 pt-[2rem] items-center text-[2rem] text-black '>
                <li><NavLink className='' to="/">Home</NavLink></li>
                <li><NavLink className='' to="/about">About</NavLink></li>
                <li><NavLink className='' to="/projects">Projects</NavLink></li>
                <li><NavLink className='' to="/skills">Skills</NavLink></li>
                <li><NavLink className='' to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header