import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      {/* <footer className="text-center">
        Copyright 2024 Tripical Coffee - All Rights Reserved
      </footer> */}
    </div>
  );
};

export default MainLayout;
