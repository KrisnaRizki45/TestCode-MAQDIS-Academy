import React, { useState } from "react";
import heroimg from "../assets/heroimg.png";
import backgroundImage from "../assets/homeimg.webp";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaTimes } from "react-icons/fa";

const Hero = () => {
  const [openModal, setOpenModal] = useState(null); // null | "read" | "reach"

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <div
      id="hero"
      className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt[0px] lg:px-[150px] px-[20px] 
        flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* LEFT SIDE */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start
                lg:gap-8 gap-4"
      >
        <Motion.h1
          variants={slideUpVariants}
          className="text-blue-600 text-2xl"
        >
          KAMI ADALAH KONSULTAN 
        </Motion.h1>
        <Motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[50px] font-bold"
        >
          kami akan membangun impian anda
        </Motion.h1>
        <div className="w-[120px] h-[6px] bg-blue-600"></div>
        <p className="text-white text-[20px]">
          ARDEXA merupakan badan usaha yang bergerak di bidang jasa
          konsultan perencanaan dan konsultan perizinan. Perusahaan ini
          didirikan dengan tujuan memberikan layanan profesional, efektif, dan
          sesuai dengan ketentuan hukum yang berlaku, guna mendukung kelancaran
          serta keberhasilan berbagai proyek pembangunan maupun kegiatan usaha.
        </p>
        <Motion.div
  initial="hidden"
  whileInView="visible"
  variants={zoomInVariants}
  className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
>
  <Motion.a
  variants={zoomInVariants}
  onClick={() => setOpenModal("read")}
  className="block bg-blue-600 hover:bg-blue-900 hover:text-black 
             w-full sm:w-auto text-center
             px-6 sm:px-10 py-2 sm:py-3 rounded-lg
             text-white text-sm sm:text-base font-bold"
>
  BACA SELENGKAPNYA
</Motion.a>

<Motion.a
  variants={zoomInVariants}
  onClick={() => setOpenModal("reach")}
  className="block border-white hover:border-blue-600 hover:text-blue-600
             border-2 w-full sm:w-auto text-center
             px-6 sm:px-10 py-2 sm:py-3 rounded-lg
             text-white text-sm sm:text-base font-bold"
>
  HUBUNGI KAMI
</Motion.a>
</Motion.div>
      </Motion.div>

      {/* RIGHT SIDE */}
      <div className="lg:w-[40%] w-full flex lg:justify-end justify-center items-end">
        <Motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroimg}
          alt="hero image"
          className="lg:h-[630px] h-[200px] object-contain lg:mb-[-10px] mb-0"
        />
      </div>

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
        <span className="font-bold">ARDEXA</span> merupakan badan usaha yang
        bergerak di bidang jasa konsultan perencanaan dan
        konsultan perizinan. Perusahaan ini didirikan dengan tujuan
        memberikan layanan profesional, efektif, dan sesuai dengan
        ketentuan hukum yang berlaku, guna mendukung kelancaran
        serta keberhasilan berbagai proyek pembangunan maupun
        kegiatan usaha.
        <br/> <br />
        Dalam pelaksanaan tugasnya, <span className="font-bold">ARDEXA</span> didukung oleh tenaga ahli yang berkompeten,
        berpengalaman, serta memiliki pemahaman mendalam
        terhadap regulasi dan standar teknis. Kami senantiasa
        mengutamakan integritas, ketepatan waktu, serta kualitas
        hasil kerja sebagai landasan utama dalam memberikan
        pelayanan terbaik kepada klien.
      </p>
    </div>
  )}

  {openModal === "reach" && (
    <div className="space-y-3 text-gray-800">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Hubungi Kami
      </h2>
      <div className="flex items-center gap-3">
        <span className="text-xl">📍</span>
        <p>
          Jl. Nata Endah Jl. Semboja No.P. 82, Margahayu Tengah,  
          Kec. Margahayu, Kabupaten Bandung, Jawa Barat 40225
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl">📧</span>
        <p>arsadalu.office@gmail.com</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl">📞</span>
        <p>+62 815-3743-6666</p>
      </div>
    </div>
      )}
    </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
