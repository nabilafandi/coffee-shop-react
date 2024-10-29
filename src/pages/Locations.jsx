import ImageSlider from "../components/ImageSlider2";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"; // Example icon from React Icons

const images = [
  "src/assets/photos/backyard.png",
  "src/assets/photos/cup.png",
  "src/assets/photos/cup2.png",
  "src/assets/photos/facade.png",
  "src/assets/photos/machine.png",
  "src/assets/photos/outfit.png",
  "src/assets/photos/backyard.png",
  "src/assets/photos/cup.png",
  "src/assets/photos/cup2.png",
  "src/assets/photos/facade.png",
  "src/assets/photos/machine.png",
  "src/assets/photos/outfit.png",
  "src/assets/photos/backyard.png",
  "src/assets/photos/cup.png",
  "src/assets/photos/cup2.png",
  "src/assets/photos/facade.png",
  "src/assets/photos/machine.png",
  "src/assets/photos/outfit.png",
];
const Locations = () => {
  return (
    <>
      <ImageSlider  />
      <div className=" pt-10 px-32 ">
        <h1 className="text-3xl font-bold font-mogena mb-7">
          Tripical Coffee Jakarta Timur
        </h1>
        <div className="flex">
          <div className="w-3/5 ">
            <p className="font-bold">What you can expect </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Est neque urna
              sollicitudin suspendisse phasellus rhoncus magna. Lorem ipsum
              dolor sit amet consectetur. Est neque urna sollicitudin
              suspendisse phasellus rhoncus magna. Lorem ipsum dolor sit amet
              consectetur. Est neque urna sollicitudin suspendisse phasellus
              rhoncus magna. Purus nulla lacus diam non risus. Et commodo in
              velit ut sapien duis etiam et velit. Integer ut amet elit vitae
              amet. <b>(penjelasan singkat)</b>
            </p>
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
              <p>
                Komp. Billy Moon, Jl. Janur II Jl. Raya Kalimalang, Pd. Klp.,
                Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota
                Jakarta 13450
              </p>
            </div>
            <div>
              <p className="font-bold">Shop Hours</p>
              <div className="w-72">
                <div className="flex justify-between w-90 max-w-md mx-auto">
                  <div className="flex-1 ">Mon - Thu</div>
                  <div className="flex-1 ">: 21.00 - 22.00</div>
                </div>
                <div className="flex justify-between w-90 max-w-md mx-auto">
                  <div className="flex-1 ">Fri</div>
                  <div className="flex-1 ">: 21.00 - 22.00</div>
                </div>
                <div className="flex justify-between w-90 max-w-md mx-auto">
                  <div className="flex-1 ">Sat - Sun</div>
                  <div className="flex-1 ">: 21.00 - 22.00</div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">Telephone</p>
              <p>+62 8965 7395 010</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
