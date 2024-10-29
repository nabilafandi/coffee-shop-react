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
  const slideWidth = 256; // Adjust this width based on your image's display width
  const totalWidth = slideWidth * images.length;

  useEffect(() => {
    const loop = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: images.length * 2, // Adjust speed as needed
          ease: "linear",
        },
      });
      controls.set({ x: 0 }); // Reset x position to create seamless loop
      loop(); // Restart loop for continuous animation
    };
    loop();
  }, [controls, totalWidth]);

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div className="flex" animate={controls}>
        {images.concat(images).map((image, index) => (
          <div key={index} className="w-64 h-96 flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
