import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full sm:h-[120vh] lg:h-[150vh] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* <div className='w-5 h-5 rounded-full bg-[#915eff]'></div> */}
          <div className='w-5 h-5 rounded-full bg-[#6A5ACD]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>

        </div>
        <div>
          {/* <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#6231cb]'>Simrah</span></h1> */}
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#6A5ACD]'>Simrah</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I craft visually appealing, user-friendly interfaces<br className='sm:block hidden'/>and responsive web applications.</p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute bottom-20 xs:bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5, repeat: Infinity, repeatType:'loop'}} className='bg-secondary mb-1 rounded-full w-3 h-3'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero