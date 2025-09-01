// animation.js

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 }, // Start slightly below with no opacity
  visible: {
    y: 0, // Final position
    opacity: 1, // Fully visible
    transition: {
      staggerChildern: 2,
      duration: 1.5, // Duration of the slide-up animation
      ease: "easeOut",
    },
  },
};

export const zoomInVariants = {
  hidden: { scale: 0.5, opacity: 0 }, // Start smaller with no opacity
  visible: {
    scale: 1, // Full size
    opacity: 1, // Fully visible
    transition: {
      staggerChildern: 2,
      duration: 1.2, // Duration of the zoom-in animation
      ease: "easeOut",
    },
  },
};

export const cardHover = {
  rest: { scale: 1, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

// varian khusus slider kanan kiri
export const slideVariants = {
  enterRight: { x: 100, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exitLeft: { x: -100, opacity: 0, transition: { duration: 0.5 } },
};
