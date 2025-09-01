import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients } from "../export";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Tambahan varian untuk slider kanan kiri
const slideVariants = {
  enterRight: { x: 100, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exitLeft: { x: -100, opacity: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [direction, setDirection] = useState(0); // arah slide

  // Update jumlah card per page sesuai ukuran layar
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // tablet
      } else {
        setCardsPerPage(3); // desktop
      }
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(clients.length / cardsPerPage);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentCards = clients.slice(
    activeIndex * cardsPerPage,
    activeIndex * cardsPerPage + cardsPerPage
  );

  return (
    <div id="testimonials" className="w-full relative">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col items-center gap-[20px]"
      >
        {/* Heading */}
        <Motion.h1
          variants={slideUpVariants}
          className="text-blue-600 text-2xl"
        >
          TESTIMONI
        </Motion.h1>
        <Motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[28px] sm:text-[40px] font-bold text-center"
        >
          APA KATA KLIEN KAMI
        </Motion.h1>
        <Motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-blue-600"
        ></Motion.div>

        {/* Cards */}
        <div className="relative w-full flex justify-center items-center mt-10">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
          >
            <FaChevronLeft />
          </button>

          {/* Cards Container */}
          <AnimatePresence mode="wait" custom={direction}>
            <Motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction === 1 ? "enterRight" : "exitLeft"}
              animate="center"
              exit={direction === 1 ? "exitLeft" : "enterRight"}
              className={`grid gap-6 w-full ${
                cardsPerPage === 1
                  ? "grid-cols-1"
                  : cardsPerPage === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {currentCards.map((client, idx) => (
                <Motion.div
                  key={idx}
                  variants={zoomInVariants}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white rounded-2xl p-6 flex flex-col h-full"
                >
                  {/* Profile row */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="text-white font-semibold uppercase text-sm sm:text-base">
                        {client.name}
                      </h3>
                      <p className="text-blue-500 text-xs sm:text-sm">
                        {client.position}
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-white text-sm sm:text-base leading-relaxed flex-1 text-center px-2 mb-4">
                    "{client.about}"
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < (client.rating || 5)
                            ? "text-yellow-400"
                            : "text-gray-500"
                        } w-5 h-5`}
                      />
                    ))}
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-3 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className={`w-3 h-3 rounded-full ${
                i === activeIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </Motion.div>
    </div>
  );
};

export default Testimonials;
