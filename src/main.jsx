import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Locations from "./pages/Locations.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about/",
    element: <AboutUs />,
  },
  {
    path: "/shop/",
    element: <Shop />,
  },
  {
    path: "/locations/",
    element: <Locations />,
  },
  {
    path: "/promo/",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  // </React.StrictMode>
);
