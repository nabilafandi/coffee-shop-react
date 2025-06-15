import { motion } from "framer-motion";
import { fetchAboutUsData } from "../services/api";
import { useEffect, useState } from "react";
import { ImageSwiper } from "../components/ImageSwiper";

// Animation variants
const fadeSlideUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeSlideLeft = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAboutUsData();
        setAboutData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative">
    
      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-4 sm:px-8 py-8 min-h-[60vh] flex items-center justify-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <motion.div
            className="bg-gray-200 h-56 sm:h-96 rounded-xl overflow-hidden"
            variants={fadeSlideRight}
          >
            <img
              src={aboutData.title_image_url}
              className="h-full w-full object-cover"
              alt="About us"
            />
          </motion.div>
          <motion.div
            className="flex items-center align-middle"
            variants={fadeSlideLeft}
          >
            <div>
              <motion.p
                className="text-base sm:text-lg font-bold mb-4"
                variants={fadeSlideUp}
              >
                {aboutData.company_name}
              </motion.p>
              <motion.p
                className="text-2xl sm:text-4xl font-mogena"
                variants={fadeSlideUp}
              >
                {aboutData.tagline}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Description Section */}
      <motion.section
        className="bg-trippicalBlack text-trippicalWhite flex items-center justify-center min-h-48 sm:h-96 text-center px-4 sm:px-20 py-8"
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-xs sm:text-2xl">{aboutData.description}</p>
      </motion.section>

      {/* Events Section */}
      <motion.section
        className="flex flex-col w-full min-h-48 sm:h-screen justify-center space-y-6 py-8"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-left align-middle px-4 sm:px-20"
          variants={fadeSlideUp}
        >
          <p className="text-base sm:text-lg font-bold mb-1">
            Relive The Moment
          </p>
          <p className="text-2xl sm:text-4xl font-mogena">Our past events</p>
        </motion.div>

        <motion.div variants={fadeSlideUp}>
          {aboutData.event_images && aboutData.event_images.length > 0 && (
            <div className="w-full">
              <ImageSwiper images={aboutData.event_images} />
            </div>
          )}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;