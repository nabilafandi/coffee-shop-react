import LogoTripical from "../assets/Logo/LogoTripical.png";
import background from "../assets/background/backgroundimage.jpg";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="flex font-sans font-bold center items-center text-red-800 text-2xl ">
        Tripical
        <img
          src={LogoTripical}
          alt="Logo Tripical Coffee"
          className="w-6 mx-1"
        />
        Coffee
      </h1>
      <p className=" text-xs ">Beyond your expectation</p>
    </div>
  );
};
const Hero = () => {
  return (
    <div className="absolute top-0 w-full -z-10 h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${background})` }} >
      <div className="py-32">
        <Logo />
      </div>
    </div>
  );
};

export default Hero;
