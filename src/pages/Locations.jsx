import { useEffect, useState } from "react";
import { fetchLocationData } from "../services/api";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import { ImageSwiper } from "../components/ImageSwiper";

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

const Locations = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchLocationData();
        setData(data);
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
    <>
      {/* Image Swiper Section */}
      <motion.section
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-8"
      >
        {data.location_images && data.location_images.length > 0 && (
          <div className="w-full">
            <ImageSwiper images={data.location_images} />
          </div>
        )}
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="pt-10 px-4 md:px-32"
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold font-mogena mb-7"
          variants={fadeSlideUp}
        >
          {data.name}
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <motion.div
            className="md:w-3/5"
            variants={fadeSlideRight}
          >
            <div
              className="prose max-w-full text-sm sm:text-base"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.description),
              }}
            />
            <div className="flex flex-col sm:flex-row mt-5 gap-4">
              <motion.button
                className="flex items-center justify-center bg-trippicalBlack text-trippicalWhite rounded-full px-4 py-2 text-sm sm:text-base"
                variants={fadeSlideUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp className="mr-2" />
                Contact Us
              </motion.button>
              <motion.button
                className="flex items-center justify-center bg-offWhite text-trippicalBlack font-semibold rounded-full px-4 py-2 text-sm sm:text-base"
                variants={fadeSlideUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaMapMarkerAlt className="mr-2" />
                Find Us
              </motion.button>
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.div
            className="flex flex-col md:ml-10 md:w-2/5 gap-6 mt-8 md:mt-0"
            variants={fadeSlideLeft}
          >
            <div>
              <p className="font-bold text-base sm:text-lg">Address</p>
              <p className="text-sm sm:text-base">{data.address}</p>
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg">Shop Hours</p>
              <div className="max-w-full">
                <div
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.shop_hour),
                  }}
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg">Telephone</p>
              <p className="text-sm sm:text-base">{data.telephone}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Locations;