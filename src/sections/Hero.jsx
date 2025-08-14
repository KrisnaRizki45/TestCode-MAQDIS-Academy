    import React from 'react'
    import heroimg from '../assets/heroimg.png'
    import backgroundImage from '../assets/homeimg.webp'
    import { motion as Motion } from 'framer-motion'
    import { slideUpVariants, zoomInVariants } from './animation'

    const Hero = () => {
    return (
        <div id='hero' className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt[0px] lg:px-[150px] px-[20px] 
        flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' 
        style={{ backgroundImage: `url(${backgroundImage})`}}>
            <Motion.div
                initial='hidden'
                whileInView="visible"
                variants={slideUpVariants}
                className='lg:w-[60%] w-full flex flex-col justify-center items-start
                lg:gap-8 gap-4'
                >
                    <Motion.h1
                        variants={slideUpVariants}
                        className='text-blue-600 text-2xl'
                    >
                        WE ARE CONSULTANT
                    </Motion.h1>
                    <Motion.h1
                        variants={slideUpVariants}
                        className='text-white uppercase text-[50px] font-bold'
                    >
                        we will build your dream
                    </Motion.h1>   
                        <div className='w-[120px] h-[6px] bg-blue-600'></div>
                        <p className='text-white text-[20px]'>
                            PT Arsa Dalu Kreasi adalah perusahaan konsultan perencana yang berdiri pada tahun 2024 di Taman Kopo Indah, Bandung. 
                            Kami menghadirkan solusi perencanaan terpadu mulai dari arsitektur, struktur, elektrikal, mekanikal, plumbing, interior, dan landscape, 
                            hingga layanan andalalin, persetujuan bangunan gedung, sertifikat laik fungsi, dan konsultan lingkungan hidup. 
                            Dengan kreativitas, ketepatan, dan komitmen pada keberlanjutan, kami membantu mewujudkan setiap visi menjadi karya nyata yang bernilai.
                        </p>
                    <Motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={zoomInVariants}
                        className='flex justify-center items-center gap-5'
                    >
                        <Motion.button
                            variants={zoomInVariants}
                            className='bg-blue-600 hover:bg-blue-900 hover:text-black px-10 py-3 rounded-lg
                            rounded-lg text-black font-bold'
                        >
                            READ MORE
                        </Motion.button>
                        <Motion.button
                            variants={zoomInVariants}
                            className='border-white hover:border-blue-600 hover:text-blue-600
                            border-2 px-10 py-3 rounded-lg text-white font-bold'
                        >
                            REACH US
                        </Motion.button>
                    </Motion.div>
            </Motion.div>
            <div className='lg:w-[40%] w-full flex lg:justify-end justify-center items-end'>
                <Motion.img
                    initial="hidden"
                    whileInView="visible"
                    variants={zoomInVariants}
                    src={heroimg}
                    alt="hero image"
                    className='lg:h-[630px] h-[200px] object-contain lg:mb-[-10px] mb-0'
                />
                </div>
        </div>
    )
    }

    export default Hero