import React, { useContext } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { AppContext } from '../App';


const Footer = () => {
  const {year} = useContext(AppContext)
  return (
    <div className='flex justify-between p-3 w-full fixed bottom-1'>
      <h5>Aborisade Ayomiposi @ {year}</h5>
      <ul className='flex gap-3'>
        <li><MdOutlineMail className='text-[#d7d7d7]'/></li>
        <li><MdOutlineMail className='text-[#d7d7d7]'/></li>
        <li><MdOutlineMail className='text-[#d7d7d7]'/></li>
        <li><MdOutlineMail className='text-[#d7d7d7]'/></li>
        <li><MdOutlineMail className='text-[#d7d7d7]'/></li>
      </ul>
    </div>
  )
}

export default Footer