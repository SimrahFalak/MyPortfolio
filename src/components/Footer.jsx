import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import React from 'react'

function Footer() {
  return (
    <motion.div variants={fadeIn("", "", 0.1, 1)} className='flex justify-center items-center gap-5'>
      <a 
        href="https://www.linkedin.com/in/simrah-khan-9133b52a4" 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-sm text-secondary hover:text-white pb-4 cursor-pointer'
      >
        LinkedIn
      </a>
      <a 
        href="https://github.com/SimrahFalak" 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-sm text-secondary hover:text-white pb-4 cursor-pointer'
      >
        Github
      </a>
      <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=engrsimrahfalak@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-sm text-secondary hover:text-white pb-4 cursor-pointer'
      >
        Email
      </a>
    </motion.div>
  )
}

export default Footer
