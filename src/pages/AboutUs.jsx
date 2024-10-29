import { motion } from "framer-motion";
import ImageSlider2 from "../components/ImageSlider2";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <div className="relative">
      <div className="-right-20 top-12 absolute rotate-12 h-80 -z-10">
        <img
          src="src/assets/background/tiki1.png"
          className="mb-3 h-full object-contain"
        />
        <img
          src="src/assets/background/tiki2.png"
          className="mb-3 h-full object-contain"
        />
        <img
          src="src/assets/background/tiki3.png"
          className="mb-3 h-full object-contain"
        />
      </div>

      <motion.div
        className="container mx-auto p-8 h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-2 gap-8 w-full"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-gray-200 h-96"
            variants={fadeIn}
          ></motion.div>
          <motion.div
            className="flex items-center align-middle"
            variants={fadeIn}
          >
            <div>
              <p className="text-lg font-bold mb-4">Tripical Coffee</p>
              <p className="text-4xl font-mogena">
                Your local haven for coffee and people
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-trippicalBlack text-trippicalWhite flex items-center justify-center h-96 text-center px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <p className="text-2xl">
          Tripical Coffee is more than just a place to grab a cup of joe. We're
          a community hub where friends meet, ideas spark, and the aroma of
          freshly brewed coffee fills the air. With three years of experience in
          the coffee industry, we've perfected our craft to bring you the finest
          coffee beverages and a welcoming atmosphere.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col w-full h-screen justify-center space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex flex-col items-left align-middle px-20"
          variants={fadeIn}
        >
          <p className="text-lg font-bold mb-1">Relive The Moment</p>
          <p className="text-4xl font-mogena">Our past events</p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <ImageSlider2 />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default AboutUs;
