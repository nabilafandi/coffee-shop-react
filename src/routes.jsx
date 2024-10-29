import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Promo from "./pages/Promo.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
import Locations from "./pages/Locations.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ShopLayout from "./layouts/ShopLayout.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Test from "./pages/test.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about/", element: <AboutUs /> },
      //   { path: "/shop/:id", element: <ProductDetail  />, },
      { path: "/locations/", element: <Locations /> },
      { path: "/promo/", element: <Promo /> },
      {
        path: "/shop/",
        element: <ShopLayout />,
        children: [
          { path: ":category", element: <ProductList /> },
          { path: ":category/:productId", element: <ProductDetails /> },
        ],
      },
      { path: "/test", element: <Test /> },
    ],
  },
]);

export default Router;
