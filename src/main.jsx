import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout"
import ShopLayout from "./layouts/shopLayout.jsx";

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
    element: <Layout />, // Use the Layout as the main wrapper
    children: [
      {
        path: "/", // Default route under Layout
        element: <Home />,
      },
      {
        path: "/about/",
        element: <AboutUs />,
      },
      {
        path: "/shop/",
        element: <ShopLayout />, // Use ShopLayout for /shop routes
        children: [
          {
            path: "", // Matches /shop
            element: <Shop />,
          },
          {
            path: ":id", // Matches /shop/:id
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/locations/",
        element: <Locations />,
      },
      {
        path: "/promo/",
        element: <Promo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  // </React.StrictMode>
);
