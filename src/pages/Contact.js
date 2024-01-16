import React from 'react'
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div>
        <motion.div 
        className='home'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}  >
        this is the Contact page
    </motion.div>
  </div>
  )
}

export default Contact