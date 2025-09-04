import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { portfolio } from "../export";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.image.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.image.length - 1 : prev - 1
    );
  };

  return (
    <div id="portfolio" className="w-full bg-white/5">
      {/* GRID */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        viewport={{ once: false, amount: 0.1 }}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col items-center gap-[20px]"
      >
        <Motion.h1 variants={slideUpVariants} className="text-blue-600 text-2xl">
          PROYEK KAMI
        </Motion.h1>
        <Motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          PORTOFOLIO
        </Motion.h1>
        <Motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-blue-600"
        ></Motion.div>

        {/* Portfolio Grid */}
        <Motion.div
  variants={{
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>
          {portfolio.map((item, index) => (
            <Motion.div
              key={index}
              variants={zoomInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject({ ...item, index: 0 })}
              className="bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <img
                src={item.image[0]}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h1 className="text-lg font-bold text-gray-900">{item.title}</h1>
                <p className="text-gray-600 text-sm mt-2">{item.about}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </Motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedProject(null);
              setCurrentImageIndex(0);
            }}
          >
            <Motion.div
              className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[700px] p-6 relative overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentImageIndex(0);
                }}
                className="absolute top-3 right-3 z-50 rounded-full bg-white p-2 hover:bg-blue-600 transition-colors duration-200"
              >
                <FaTimes className="w-5 h-5 text-blue-600 hover:text-white" />
              </button>

              {/* Slider Image */}
              <div className="relative flex items-center justify-center">
                <img
                  src={selectedProject.image[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain rounded-lg mb-4"
                />

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {selectedProject.title}
              </h2>

              {/* Detail */}
              <p className="text-gray-700 leading-relaxed">{selectedProject.detail}</p>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
