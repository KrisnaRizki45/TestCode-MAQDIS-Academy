import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaTimes } from "react-icons/fa";

const About = () => {
    const [openModal, setOpenModal] = useState(null); // null | "read" | "reach"
    
      const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
      };

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
                SELAMAT DATANG DI
            </Motion.h1>
            <Motion.h1
                variants={slideUpVariants}
                className='text-white uppercase text-[40px] font-bold'
            >
                Ardexa
            </Motion.h1>
            <div className='w-[120px] h-[6px] bg-blue-600'></div>
            <p className='text-3xl italic text-gray-50 mt-[60px]'>
                "Mewujudkan Perencanaan yang Terarah dan Legalitas yang Terjamin",
                 kami berkomitmen mendampingi Anda dari tahap perencanaan hingga
                legalitas proyek.
            </p>
        </Motion.div>

        <Motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
        >
            <p className='text-white text-lg text-justify '> PT ARSA DALU KREASI merupakan badan usaha yang
                bergerak di bidang jasa konsultan perencanaan dan
                konsultan perizinan. Perusahaan ini didirikan dengan tujuan
                memberikan layanan profesional, efektif, dan sesuai dengan
                ketentuan hukum yang berlaku, guna mendukung kelancaran
                serta keberhasilan berbagai proyek pembangunan maupun
                kegiatan usaha. </p>
            <Motion.button
                variants={zoomInVariants}
                onClick={() => setOpenModal("read")}
                className='bg-blue-600 hover:bg-blue-900 hover:text-black px-10 py-3
                rounded-lg font-bold text-black '
            >
                BACA SELENGKAPNYA
            </Motion.button>
            {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <Motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
        <Motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-2xl shadow-xl shadow-blue-600/20 
                    p-8 max-w-lg w-full relative border border-gray-100"
        >
        {/* Close Button */}
        <button
        onClick={() => setOpenModal(null)}
        className="absolute top-3 right-3 rounded-full bg-white p-2 
                    hover:bg-blue-600 transition-colors duration-200"
        >
        <FaTimes className="w-5 h-5 text-blue-600 hover:text-white" />
        </button>

        {openModal === "read" && (
            <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Tentang Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">PT ARSA DALU KREASI</span> merupakan badan usaha yang
                bergerak di bidang jasa konsultan perencanaan dan
                konsultan perizinan. Perusahaan ini didirikan dengan tujuan
                memberikan layanan profesional, efektif, dan sesuai dengan
                ketentuan hukum yang berlaku, guna mendukung kelancaran
                serta keberhasilan berbagai proyek pembangunan maupun
                kegiatan usaha.
                <br/> <br />
                Dalam pelaksanaan tugasnya, <span className="font-bold">PT ARSA DALU KREASI</span> didukung oleh tenaga ahli yang berkompeten,
                berpengalaman, serta memiliki pemahaman mendalam
                terhadap regulasi dan standar teknis. Kami senantiasa
                mengutamakan integritas, ketepatan waktu, serta kualitas
                hasil kerja sebagai landasan utama dalam memberikan
                pelayanan terbaik kepada klien.
            </p>
            </div>
        )}
        </Motion.div>

                </Motion.div>
                )}
            </AnimatePresence>
                </Motion.div>
    </div>
  )
}

export default About