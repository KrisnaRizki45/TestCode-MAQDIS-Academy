import React from 'react'
import { motion as Motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
import { planning } from '../export'

const Working = () => {
  return (
    <div id="working" className='w-full bg-white'>
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
                STEP BY STEP
            </Motion.h1>
            <Motion.h1
                variants={slideUpVariants}
                className='text-black uppercase text-[40px] font-bold text-center '
            >
                HOW IT'S WORKING
            </Motion.h1>
            <Motion.div
                variants={slideUpVariants}
                className='w-[120px] h-[6px] bg-blue-600'
            >
            </Motion.div>

            {/* buat div untuk menambahkan services */}
            <Motion.div
                initial="hidden"
                whileInView="visible"
                variants={zoomInVariants}
                className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center
                items-start gap-[20px] mt-[30px]'
            >
                {
                    planning.map((item, index)  => (
                        <div key={index} className='flex flex-col justify-center items-center
                        gap-5 border-2 border-blue-600 rounded-mg p-6'>
                            <div>
                            <item.icon className='size-[80px] bg-blue-600 hover:bg-black
                            hover:fill-white p-4 rounded-full cursor-pinter'/>
                            </div>
                            <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>
                            <p className='text-[20px] text-center text-gray-600'>{item.about}</p>
                        </div>
                    ))
                }
            </Motion.div>
        </Motion.div>
    </div>
  )
}

export default Working