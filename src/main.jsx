import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Promo from "./pages/Promo.jsx";
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
    path: "/shop/:id",
    element: <ProductDetail  />,
  },
  {
    path: "/locations/",
    element: <Locations />,
  },
  {
    path: "/promo/",
    element: <Promo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  // </React.StrictMode>
);
