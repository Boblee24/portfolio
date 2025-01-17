import React, { useContext } from 'react'
import "../style.css"
import { AppContext } from '../App'

const Sidebar = () => {
    const {currentRoute, todayDate} = useContext(AppContext)
  return (
    <div className='sidebar fixed hidden justify-around h-full pl-3 bg-red-900 z-40'>
        <h2 className='font-semibold text-[1.2rem] opacity-55'>{currentRoute === "" ? "Home" : currentRoute}</h2>
        <h3 className='font-semibold text-[1.2rem]'>{todayDate}</h3>
    </div>
  )
}

export default Sidebar