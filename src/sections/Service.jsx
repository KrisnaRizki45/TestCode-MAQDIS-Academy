import React from 'react'
import { motion as Motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
import { allservices } from '../export'

const Service = () => {
  return (
    <div id="services" className='w-full bg-white'>
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
                SPECIAL OFFER
            </Motion.h1>
            <Motion.h1
                variants={slideUpVariants}
                className='text-black uppercase text-[40px] font-bold text-center '
            >
                OUR BEST SERVICE
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
                className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center
                items-start gap-[20px] mt-[30px]'
            >
                {
                    allservices.map((item, index) => (
                        <Motion.div 
                        variants={zoomInVariants}
                        className='flex justify-center items-start gap-5 p-8'
                        key={index}
                        >
                            <img src={item.icon} alt="" className='w-[70px] border-2
                            border-blue-600 hover:bg-blue-500 rounded-lg p-2'/>
                            <div className='flex flex-col justify-center items-start gap-3'>
                                <h1 className='text-xl font-bold text-black'>{item.title}</h1>
                                <p className='text-[18px]'>{item.about}</p>
                            </div>
                        </Motion.div>
                    ))
                }
            </Motion.div>
        </Motion.div>
    </div>
  )
}

export default Service