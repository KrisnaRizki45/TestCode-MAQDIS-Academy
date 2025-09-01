import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { trusted } from "../export";
import { FaTimes } from "react-icons/fa";

const Working = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div id="working" className="w-full bg-white">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between
        items-center gap-[20px]"
      >
        {/* Heading */}
        <Motion.h1
          variants={slideUpVariants}
          className="text-blue-600 text-2xl"
        >
          MENGAPA MEMILIH KAMI
        </Motion.h1>
        <Motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[32px] sm:text-[40px] font-bold text-center"
        >
          KELEBIHAN KAMI
        </Motion.h1>
        <Motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-blue-600"
        ></Motion.div>

        {/* Trusted Section */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center
          items-start gap-[20px] mt-[30px]"
        >
          {trusted.map((item, index) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={index}
                variants={zoomInVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedItem(item)}
                className="flex flex-col justify-center items-center gap-5 border border-blue-200 
                shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl p-6 cursor-pointer bg-white"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 border-2 border-blue-600">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-xl font-bold uppercase text-center">{item.title}</h1>
                <p className="text-[16px] text-center text-gray-600">{item.about}</p>
              </Motion.div>
            );
          })}
        </Motion.div>
      </Motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
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
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 rounded-full bg-white p-2 
                hover:bg-blue-600 transition-colors duration-200"
              >
                <FaTimes className="w-5 h-5 text-blue-600 hover:text-white" />
              </button>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <selectedItem.icon className="w-10 h-10 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold">{selectedItem.title}</h2>
              </div>

              {/* Detail */}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {selectedItem.detail}
              </p>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Working;
