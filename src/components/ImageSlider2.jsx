import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "src/assets/photos/backyard.png",
  "src/assets/photos/cup.png",
  "src/assets/photos/cup2.png",
  "src/assets/photos/facade.png",
  "src/assets/photos/machine.png",
  "src/assets/photos/outfit.png",
];

const ImageSlider = () => {
  const controls = useAnimation();
  const slideWidth = 300; // Adjust based on image width
  const totalWidth = slideWidth * images.length;

  useEffect(() => {
    // Infinite loop animation
    controls.start({
      x: [0, -totalWidth], // Slide the full width
      transition: {
        duration: images.length * 2, // Adjust speed as needed
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, totalWidth]);

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        className="flex"
        animate={controls}
        style={{ x: 0 }} // Set the initial x to 0 for smooth animation
      >
        {images.map((image, index) => (
          <div key={index} className="w-64 h-96 flex-shrink-0 ">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
        {/* Duplicate images to create a smooth loop */}
        {images.map((image, index) => (
          <div key={`${index}-copy`} className="w-64 h-96 flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
