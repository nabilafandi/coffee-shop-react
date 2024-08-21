import { Carousel } from "@material-tailwind/react";

import Navbar from "../components/Navbar";
import { Product } from "../components/ProductList";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More productproductList
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 w-72">
        <div className="flex justify-center">
          <img
            src={"src/assets/photos/outfit.png"}
            alt="About Us Image"
            className="w-full h-52 object-cover mb-8 "
          />
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-8">[Title]</h1>
          <p className="text-lg text-gray-700 text-center">[Bridging text]</p>
        </div>
        <div>
          <h2 className="text-2xl text-gray-700 text-center">
            [Background & values]
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-16 w-72">
        <div>
          <h1 className="text-4xl font-bold text-center mb-8">[Products]</h1>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {products.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
              <Product product={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-16 w-full">
        <div>
          <h1 className="text-4xl font-bold text-center mb-8">[Past Events]</h1>
        </div>
        <Carousel className="" autoplay autoplayDelay="5000">
          <img
            src="src/assets/photos/backyard.png"
            alt="image 1"
            className="h-72 w-full object-cover"
          />
          <img
            src="src/assets/photos/cup.png"
            alt="image 2"
            className="h-72 w-full object-cover"
          />
          <img
            src="src/assets/photos/cup2.png"
            alt="image 3"
            className="h-72 w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  );
};

export default AboutUs;
