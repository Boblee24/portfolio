import React, { useContext } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { AppContext } from '../App';


const Footer = () => {
  const {year} = useContext(AppContext)
  return (
    <div className='flex justify-between p-3 w-full fixed bottom-0 z-20 bg-[#d7d7d7]'>
      <h5>Aborisade Ayomiposi @ {year}</h5>
      <ul className='flex gap-5'>
        <li><MdOutlineMail className='text-[black]' size={25}/></li>
        <li><FaGithub className='text-[black]' size={25}/></li>
        <li><FaLinkedin className='text-[black]' size={25}/></li>
        <li><FaTwitter className='text-[black]' size={25}/></li>
        <li><FaLinkedin className='text-[black]' size={25}/></li>
      </ul>
    </div>
  )
}

export default Footer