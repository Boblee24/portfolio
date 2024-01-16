import React from 'react'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
      className='home'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}} >
      this is the home page
    </motion.div>
  )
}

export default Home