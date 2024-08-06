import ruralJapan from "../assets/peakpx.jpg";
import logo from "../assets/arabicalogo-2.png"
const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <img src={ruralJapan}alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={logo} alt="Logo" className="w-60 h-auto" />
      </div>
    </div>
  );
};

export default Hero;
