import React from 'react'
import { motion as Motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
    justify-between items-start gap-[50px]' id='about'>
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
                WELCOME TO
            </Motion.h1>
            <Motion.h1
                variants={slideUpVariants}
                className='text-white uppercase text-[40px] font-bold'
            >
                PT. Arsa Dalu Kreasi
            </Motion.h1>
            <div className='w-[120px] h-[6px] bg-blue-600'></div>
            <p className='text-3xl italic text-gray-50 mt-[60px]'>Kami percaya setiap ruang memiliki cerita, dan setiap desain adalah bahasa untuk menceritakannya. 
                Dengan sentuhan inovasi dan ketelitian teknis, PT Arsa Dalu Kreasi menghadirkan perencanaan yang 
                tidak hanya fungsional, tetapi juga memancarkan estetika dan makna.</p>
        </Motion.div>

        <Motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
        >
            <p className='text-white text-lg text-justify '>Berdiri pada tahun 2024 di Bandung, PT Arsa Dalu Kreasi menjadi mitra terpercaya dalam perencanaan 
                arsitektur, struktur, elektrikal, mekanikal, plumbing, interior, dan landscape. 
                Kami juga menyediakan layanan konsultasi andalalin, persetujuan bangunan gedung, sertifikat laik fungsi, 
                hingga lingkungan hidup. Tim kami menggabungkan keahlian teknis, kreativitas, dan pemahaman mendalam 
                terhadap kebutuhan klien untuk menciptakan hasil yang presisi, efisien, dan berkelanjutan. </p>
            <Motion.button
                variants={zoomInVariants}
                className='bg-blue-600 hover:bg-blue-900 hover:text-black px-10 py-3
                rounded-lg font-bold text-black '
            >
                READ MORE
            </Motion.button>
        </Motion.div>
    </div>
  )
}

export default About