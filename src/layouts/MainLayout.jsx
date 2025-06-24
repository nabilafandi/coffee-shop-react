import { Outlet,  } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Decorative background images */}
      <div className="fixed -right-1 top-12 rotate-12 h-96 -z-10 pointer-events-none select-none">
        <img src="/assets/background/tiki1.png" className="mb-3 h-1/3 object-contain" alt="tiki1" />
        <img src="/assets/background/tiki2.png" className="mb-3 h-1/3 object-contain" alt="tiki2" />
        <img src="/assets/background/tiki3.png" className="mb-3 h-1/3 object-contain" alt="tiki3" />
      </div>
      <Navbar />
      <Outlet />
      {/* <footer className="text-center">
        Copyright 2024 Tripical Coffee - All Rights Reserved
      </footer> */}
    </div>
  );
};

export default MainLayout;
