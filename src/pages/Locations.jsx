import ImageSlider from "../components/ImageSlider2";
import { useEffect, useState } from "react";
import { fetchLocationData } from "../services/api";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"; // Example icon from React Icons
import DOMPurify from "dompurify";

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
      {data.location_images && data.location_images.length > 0 && (
        <ImageSlider images={data.location_images} />
      )}
      <div className=" pt-10 px-32 ">
        <h1 className="text-3xl font-bold font-mogena mb-7">{data.name}</h1>
        <div className="flex">
          <div className="w-3/5 ">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.description),
              }}
            />
            <div className="flex mt-5 gap-4">
              <button className="flex items-center justify-center bg-trippicalBlack text-trippicalWhite  rounded-full px-4 py-1 ">
                <FaWhatsapp className="mr-2" />
                Contact Us
              </button>
              <button className="flex items-center justify-center bg-offWhite text-trippicalBlack font-semibold rounded-full px-4 py-1 ">
                <FaMapMarkerAlt className="mr-2" />
                Find Us
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-10 w-2/5 gap-6">
            <div>
              <p className="font-bold">Address</p>
              <p>{data.address}</p>
            </div>
            <div>
              <p className="font-bold">Shop Hours</p>
              <div className="w-72">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.shop_hour),
                  }}
                />
              </div>
            </div>
            <div>
              <p className="font-bold">Telephone</p>
              <p>{data.telephone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
