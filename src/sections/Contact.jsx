import React from 'react'
import { motion as Motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
        
        {/* Text Section */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
          <Motion.h1
            variants={slideUpVariants}
            className='text-blue-600 text-2xl'
          >
            CONTACT US
          </Motion.h1>
          <Motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-[40px] font-bold'
          >
            Reach Us for Any Query
          </Motion.h1>
          <div className='w-[120px] h-[6px] bg-blue-600'></div>
          <p className='text-lg text-gray-700 mt-6 leading-relaxed'>
            PT. Arsa Dalu Kreasi siap membantu Anda mewujudkan proyek dengan
            solusi arsitektur, teknik, dan perencanaan terbaik. Hubungi kami
            untuk konsultasi, penawaran, atau pertanyaan terkait layanan kami.
          </p>
        </Motion.div>

        {/* Form Section */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
        >
          <Motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col gap-4 w-full'
          >
            <input
              type='text'
              placeholder='Full Name'
              className='px-6 py-3 border-2 border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none'
            />
            <input
              type='email'
              placeholder='Email Address'
              className='px-6 py-3 border-2 border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none'
            />
            <input
              type='tel'
              placeholder='Phone Number'
              className='px-6 py-3 border-2 border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none'
            />
            <textarea
              placeholder='Your Message'
              rows="4"
              className='px-6 py-3 border-2 border-gray-300 focus:border-blue-600 text-black rounded-lg w-full outline-none'
            />
            <Motion.button
              variants={zoomInVariants}
              className='bg-blue-600 hover:bg-blue-900 text-white px-10 py-4 font-bold rounded-lg w-full transition-all duration-300'
            >
              Submit
            </Motion.button>
          </Motion.form>
        </Motion.div>
      </div>
    </div>
  )
}

export default Contact
