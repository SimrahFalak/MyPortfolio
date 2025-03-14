import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {SectionWrapper} from './hoc'
import {testimonials} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const FeedbackCard=({index, testimonial, name, designation, company, image})=>{
  return(
<motion.div variants={fadeIn("","spring",index*0.5,0.75)} className='bg-black-200 p-10 rounded-3xl sm:w-[315px] w-full'> 
    <p className='text-white font-bold text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white text-[18px] tracking-wider'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>< span className='blue-text-gradient'>@</span>{name}</p>
          <p className='text-secondary mt-1 text-[12px]'>{designation} of {company}</p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover'/>
      </div>
    </div>
  </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
         <motion.div variants={textVariant()}>
                  <p className={styles.sectionSubText}>What others say</p>
                  <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
      </div>
      <div className={`${styles.padding} -mt-36 flex flex-wrap gap-7 bg-tertiary rounded-2xl min-h-[300px]`}>
        {testimonials.map((testimonial, index)=>(
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
            />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")