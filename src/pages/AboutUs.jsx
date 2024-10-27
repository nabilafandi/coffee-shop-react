import { motion } from 'framer-motion';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const loremVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <motion.div 
        className="container mx-auto p-8 h-screen flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-2 gap-8 w-full">
          <motion.div 
            className="bg-gray-200 h-96"
            variants={itemVariants}
          ></motion.div>
          <div className="flex items-center align-middle">
            <motion.div variants={itemVariants}>
              <p className="text-lg font-bold mb-4">Tripical Coffee</p>
              <p className="text-4xl font-mogena">
                Your local haven for coffee and people
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-black text-white p-8"
        variants={loremVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-2xl">Lorem ipsum dolor</p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
