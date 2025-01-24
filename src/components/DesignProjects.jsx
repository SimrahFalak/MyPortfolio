import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from './hoc'
import { designProjects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

// const ProjectCard = ({ index, description, name, tags, image, source_code_link, linkLogo }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt objects={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 mt-5 rounded-2xl sm:w-[350px] w-full'>
//         <div className='w-full relative h-[230px]'>
//           <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
//           <div className='absolute inset-0 flex justify-end m-3 card-img-hover '>
//             <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
//               <img src={linkLogo} alt="figma" className='w-1/2 h-1/2 object-contain' />
//             </div>
//           </div>
//         </div>
//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px] '>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>
//         <div className='mt-4 flex gap-2'>
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   )
// }

const ProjectCard = ({ index, description, name, tags, image, source_code_link, linkLogo }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt objects={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 mt-5 rounded-2xl sm:w-[350px] w-full'>
        <div className='w-full relative h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          {source_code_link && (
            <div className='absolute inset-0 flex justify-end m-3 card-img-hover '>
              <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={linkLogo} alt="figma" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          )}
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] '>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const DesignProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Design Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my UI/UX skills and experience through real-world examples of my work. Each project is briefly described with links to Figma Files and live demos in it.
        </motion.p>
      </div>

      <div className='mt-14 flex flex-wrap gap-7'>
        {designProjects?.map((designProject, index) => (
          <ProjectCard key={`design-project-${index}`} {...designProject} index={index} /> 
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(DesignProjects, "designProjects")