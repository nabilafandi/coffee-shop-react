import { useEffect, useState } from "react";
import { fetchPromoData } from "../services/api";

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
      <div className="bg-gray-50 text-center flex items-center justify-center h-64">
        <img src={data.banner_image} className="h-full w-full object-cover" />
        {/* <p className="text-3xl">Banner isinya promo</p> */}
      </div>
      <div className="flex flex-row justify-center gap-9 p-8 ">
        {data.promo_lines.map((promo) => (
          <div className="flex flex-col rounded overflow-hidden shadow-lg " key={promo.id}>
            <img
              className="w-72 h-72 object-cover"
              src={promo.image_url}
              alt="Card image"
            />
            <div className="w-72 ">
              <h2 className=" text-x1l font-semibold mb-2">{promo.name}</h2>
              <div>{promo.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Promo;
