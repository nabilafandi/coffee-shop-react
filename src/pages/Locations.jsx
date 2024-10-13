import { Carousel } from "@material-tailwind/react";

import Navbar from "../components/Navbar";

const Locations = () => {
  return (
    <>
      <div className="container mx-auto  w-full">
        <Carousel className="" autoplay autoplayDelay="5000">
          <img
            src="src/assets/photos/backyard.png"
            alt="image 1"
            className="h-72 w-full object-cover"
          />
          <img
            src="src/assets/photos/cup.png"
            alt="image 2"
            className="h-72 w-full object-cover"
          />
          <img
            src="src/assets/photos/cup2.png"
            alt="image 3"
            className="h-72 w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="container mx-auto py-16 w-72">
        <div className="mb-8">
          <h1 className="text-4xl font-bold  mb-8">Tripical Coffee Jakarta Timur</h1>
          <p className="text-lg text-gray-700 ">Komp. Billy Moon, Jl. Janur II Jl. Raya Kalimalang, Pd. Klp., Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13450</p>
        </div>
      </div>
    </>
  );
};

export default Locations;
