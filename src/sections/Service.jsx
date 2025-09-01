import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allservices } from "../export";
import { FaTimes } from "react-icons/fa";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id="services" className="w-full bg-white">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="lg:w-[80%] w-[95%] m-auto py-[50px] flex flex-col items-center gap-6"
      >
        {/* Section Heading */}
        <Motion.h1
          variants={slideUpVariants}
          className="text-blue-600 text-xl sm:text-2xl"
        >
          PENAWARAN KHUSUS
        </Motion.h1>
        <Motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-2xl sm:text-[40px] font-bold text-center leading-snug"
        >
          LAYANAN TERBAIK KAMI
        </Motion.h1>
        <Motion.div
          variants={slideUpVariants}
          className="w-[100px] sm:w-[120px] h-[5px] bg-blue-600"
        ></Motion.div>

        {/* Services Section */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8"
        >
          {allservices.map((item, index) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={index}
                variants={zoomInVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(item)}
                className="bg-white border border-gray-200 shadow-md rounded-2xl 
                          cursor-pointer hover:shadow-xl transition-all duration-300 
                          flex flex-col p-4 sm:p-6 w-full"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex justify-center items-center rounded-xl border-2 border-blue-600 bg-blue-50">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 mt-3">
                  <h1 className="text-base sm:text-lg font-bold text-gray-900">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.about}
                  </p>
                </div>
              </Motion.div>
            );
          })}
        </Motion.div>
      </Motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <Motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <Motion.div
              className="bg-white rounded-2xl shadow-lg w-[95%] sm:w-[600px] max-h-[80vh] overflow-y-auto p-6 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 rounded-full bg-white p-2 
                            hover:bg-blue-600 transition-colors duration-200"
              >
                <FaTimes className="w-5 h-5 text-blue-600 hover:text-white" />
              </button>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <selectedService.icon className="w-10 h-10 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold">{selectedService.title}</h2>
              </div>

              {/* Detail */}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {selectedService.detail}
              </p>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Service;
