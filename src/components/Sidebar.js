import React, { useContext } from 'react'
import "../style.css"
import { AppContext } from '../App'

const Sidebar = () => {
    const {currentRoute, todayDate} = useContext(AppContext)
  return (
    <div className=' sidebar fixed flex'>
        <h1>Hello,thisis the sidebar</h1>
        <h2>{currentRoute === "" ? "Home" : currentRoute}</h2>
        <h3>{todayDate}</h3>
    </div>
  )
}

export default Sidebar