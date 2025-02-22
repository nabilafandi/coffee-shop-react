import LogoTripical from "../assets/Logo/LogoTripical.png";
import { useEffect, useState } from "react";
import { fetchHomeData } from "../services/api";


function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const data = await fetchHomeData();
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
    <div>
      <div
        className="absolute top-0 w-full -z-10 h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${data.background_image})` }}
      >
        <div className="py-32">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="flex font-mogena center items-center text-red-800 text-2xl ">
              Tripical
              <img
                src={LogoTripical}
                alt="Logo Tripical Coffee"
                className="w-6 mx-1"
              />
              Coffee
            </h1>
            <p className=" text-xs text-trippicalWhite font- ">
              <div dangerouslySetInnerHTML={{ __html: data.tagline }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
