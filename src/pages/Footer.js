import React from 'react'
import { MdOutlineMail } from "react-icons/md";


const Footer = () => {
  return (
    <div className='flex justify-between p-3 w-full fixed bottom-1'>
      <h5>Aborisade Ayomiposi</h5>
      <ul className='flex gap-3'>
        <li><MdOutlineMail/></li>
        <li><MdOutlineMail/></li>
        <li><MdOutlineMail/></li>
        <li><MdOutlineMail/></li>
        <li><MdOutlineMail/></li>
      </ul>
    </div>
  )
}

export default Footer