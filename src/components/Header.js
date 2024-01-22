import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Harmbuger from './harmbuger'
import { AppContext } from '../App'

const Header = () => {
  const {toggle, toggleClick} = useContext(AppContext)
  
  return (
    <div className='header fixed flex w-full  z-20 bg-[#d7d7d7]'>
        <h1 className='z-20 p-3'><Link className="text-[1.5rem] font-semibold" to='/'>AYOMI</Link></h1>
        <Harmbuger/>
        <div className= {`absolute bg-[#d7d7d7] my-[3.5rem] h-[100vh] w-full duration-700 ${ toggle ? 'translated' : 'untranslated'} `}>
            <ul className=' justify-around w-full flex gap-9 font-semibold flex-col p-3 pt-[2rem] items-center text-[2rem] text-black '>
                <li><NavLink onClick={toggleClick} className='' to="/">Home</NavLink></li>
                <li><NavLink onClick={toggleClick} className='' to="/about">About</NavLink></li>
                <li><NavLink onClick={toggleClick} className='' to="/projects">Projects</NavLink></li>
                <li><NavLink onClick={toggleClick} className='' to="/skills">Skills</NavLink></li>
                <li><NavLink onClick={toggleClick} className='' to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header