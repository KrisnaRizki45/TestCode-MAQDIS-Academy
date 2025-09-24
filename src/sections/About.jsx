import React, { useState } from 'react'
import { Helmet } from "react-helmet-async";
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
    <div
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
      justify-between items-start gap-[50px]'
      id='about'
    >
      {/* SEO Helmet */}
      <Helmet>
        <title>About Us | Maqdis Academy</title>
        <meta
            name="description"
            content="Maqdis Academy adalah yayasan di Bandung yang fokus pada pembelajaran Al-Qur'an dan kegiatan dakwah Islam, berdiri sejak 2001."
        />
        <meta
            name="keywords"
            content="Maqdis Academy, Al-Qur'an, Dakwah Islam, Pendidikan Islam, Bandung"
        />
        <meta name="author" content="Maqdis Academy" />
        <link rel="canonical" href="https://maqdis.academy/about" />
      </Helmet>

      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <Motion.h1
          variants={slideUpVariants}
          className='text-orange-600 text-2xl'
        >
          SELAMAT DATANG DI
        </Motion.h1>
        <Motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[40px] font-bold'
        >
          Maqdis Academy
        </Motion.h1>
        <div className='w-[120px] h-[6px] bg-orange-600'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>
          "Membina Generasi Qur'ani", kami fokus pada pembelajaran Al-Qur'an
          dan dakwah Islam untuk membentuk generasi berilmu dan berakhlak.
        </p>
      </Motion.div>

      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <p className='text-white text-lg text-justify'>
          Maqdis Academy adalah singkatan dari Ma'had Al-Qur'an dan Dirosah
          Islamiyah, sebuah yayasan di Kota Bandung yang didirikan pada tahun
          2001 oleh <span className="font-bold">KH. Dr. Saiful Islam Mubarak, Lc., M.Ag.</span>.
          Lembaga ini berfokus pada pembelajaran Al-Qur'an, termasuk cara membaca
          dan memperbaiki bacaan Al-Qur'an, serta kegiatan dakwah Islam untuk
          membina generasi Qur'ani yang berilmu dan berakhlak.
        </p>
        <Motion.button
          variants={zoomInVariants}
          onClick={() => setOpenModal("read")}
          className='bg-orange-600 hover:bg-orange-800 text-white px-10 py-3
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
                className="bg-white rounded-2xl shadow-xl shadow-orange-600/20 
                  p-8 max-w-lg w-full relative border border-gray-100"
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpenModal(null)}
                  className="absolute top-3 right-3 rounded-full bg-white p-2 
                  hover:bg-orange-600 transition-colors duration-200"
                >
                  <FaTimes className="w-5 h-5 text-orange-600 hover:text-white" />
                </button>

                {openModal === "read" && (
                  <div>
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">
                      Tentang Maqdis Academy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold">Maqdis Academy</span> adalah yayasan di Kota Bandung yang
                      didirikan pada tahun 2001 oleh <span className="font-bold">KH. Dr. Saiful Islam Mubarak, Lc., M.Ag.</span>.
                      Lembaga ini berfokus pada pembelajaran Al-Qur'an, termasuk cara membaca
                      dan memperbaiki bacaan Al-Qur'an, serta kegiatan dakwah Islam
                      untuk membina generasi Qur'ani yang berilmu dan berakhlak.
                      <br /> <br />
                      Kami senantiasa mengutamakan integritas, kualitas pembelajaran,
                      dan pendampingan dakwah sebagai landasan utama dalam membentuk
                      generasi muslim yang berakhlak mulia dan berilmu tinggi.
                    </p>
                  </div>
                )}
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.div>
    </div>
  );
};

export default About;
