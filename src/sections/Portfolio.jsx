import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'
import project7 from '../assets/project7.jpg'
import project8 from '../assets/project8.jpg'

import { motion as Motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
      <Motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideUpVariants}
                  className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between
                  items-center gap-[20px]'
              >
                  <Motion.h1
                      variants={slideUpVariants}
                      className='text-blue-600 text-2xl'
                  >
                      PORTFOLIO
                  </Motion.h1>
                  <Motion.h1
                      variants={slideUpVariants}
                      className='text-white uppercase text-[40px] font-bold text-center '
                  >
                      OUR BEST PROJECTS
                  </Motion.h1>
                  <Motion.div
                      variants={slideUpVariants}
                      className='w-[120px] h-[6px] bg-blue-600'
                  >
                  </Motion.div>

                  <Motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={zoomInVariants}
                    className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'
                  >
                    <img src={project1} alt="project image" className='h-[250px] w-full'/>
                    <img src={project2} alt="project image" className='h-[250px] w-full'/>
                    <img src={project3} alt="project image" className='h-[250px] w-full'/>
                    <img src={project4} alt="project image" className='h-[250px] w-full'/>
                    <img src={project5} alt="project image" className='h-[250px] w-full'/>
                    <img src={project6} alt="project image" className='h-[250px] w-full'/>
                    <img src={project7} alt="project image" className='h-[250px] w-full'/>
                    <img src={project8} alt="project image" className='h-[250px] w-full'/>
                  </Motion.div>
      </Motion.div>  
    </div>
  )
}

export default Portfolio