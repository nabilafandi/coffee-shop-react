import LogoTripical from "../assets/Logo/LogoTripical.png";
import background from "../assets/background/bg-trippical.jpeg";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center scale-[2.5] sm:scale-[3.5]">
      <p className="flex font-mogena center items-center text-red-800 text-3xl sm:text-xl lg:text-xl">
        Tripical
        <img
          src={LogoTripical}
          alt="Logo Tripical Coffee"
          className="w-24 sm:w-20 mx-4"
        />
        Coffee
      </p>
      <p className="text-base sm:text-xl text-trippicalWhite mt-2">
        <i>Beyond</i> Your Expectation
      </p>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="absolute top-0 w-full -z-10 h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="py-32">
        <Logo />
      </div>
    </div>
  );
};

export default Hero;