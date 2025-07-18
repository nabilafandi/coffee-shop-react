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
        className="absolute top-0 w-full -z-10 min-h-screen h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${data.background_image}?v=${Date.now()})` }}
      >
        <div className="py-20 md:py-32 w-full flex justify-center">
          <div className="flex flex-col items-center justify-center w-full px-4">
            <h1 className="flex font-mogena items-center text-red-800 text-4xl md:text-8xl text-center flex-wrap">
              Tripical
              <img
                src={LogoTripical}
                alt="Logo Tripical Coffee"
                className="w-8 md:w-14 mx-1"
              />
              Coffee
            </h1>
            <div
              className="text-lg md:text-3xl text-trippicalWhite mt-2 md:mt-0 text-center w-full max-w-xl"
              style={{ marginTop: "-12px" }}
              dangerouslySetInnerHTML={{ __html: data.tagline }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
