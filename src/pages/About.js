import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div><motion.div 
    className='home'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}} >
    About
  </motion.div></div>
  )
}

export default About