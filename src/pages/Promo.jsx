import { useEffect, useState } from "react";
import { fetchPromoData } from "../services/api";
import { motion } from "framer-motion";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Promo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPromoData();
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
      {/* Banner with motion */}
      <motion.div
        className="bg-gray-50 text-center flex items-center justify-center h-48 sm:h-64 w-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={data.banner_image}
          className="h-full w-full object-cover"
          alt="Promo Banner"
        />
      </motion.div>

      {/* Promo Cards */}
      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 p-4 sm:p-8"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.promo_lines.length === 0 && (
          <motion.p variants={fadeSlideUp}>No Promo Available</motion.p>
        )}
        {data.promo_lines.map((promo) => (
          <motion.div
            className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white w-full sm:w-72 max-w-xs mx-auto"
            key={promo.id}
            variants={fadeSlideUp}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              className="w-full h-48 sm:h-72 object-cover"
              src={promo.image_url}
              alt={promo.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{promo.name}</h2>
              <div className="text-sm text-gray-700">{promo.description}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Promo;