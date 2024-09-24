/* eslint-disable react/prop-types */

import Navbar from "../components/Navbar";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const VariantSelector = ({variants}) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };
  console.log(variants)
  return (
    <div className="mt-4">
      <label className="text-sm font-bold">Choose a variant:</label>
      <div className="mt-2 grid grid-cols-2 gap-2">

      <RadioGroup value={selectedVariant} onChange={setSelectedVariant} aria-label="Variant">
      {variants.map((item) => (
        <Field key={item.id} className="flex items-center gap-2">
          <Radio value={item.name} className="group flex size-5 items-center justify-center rounded-md border border-trippicalBlack bg-transparent data-[checked]:bg-trippicalBlack">
          <FaCheck  className="invisible rounded-sm text-offWhite text-xs  group-data-[checked]:visible"/> 

          </Radio>
          <Label>{item.name}</Label>
        </Field>
          ))}
      </RadioGroup>
      </div>
    </div>
  );
};
const ProductDetailSection = () => {
  const { id } = useParams();
  const location = useLocation();

  const { product } = location.state;
  // const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  console.log("product", product);

  useEffect(() => {
    // Fetch product data by ID (from API or state)
    // Example: fetchProductById(id).then(data => setProduct(data));
    // For now, assume product is fetched or passed as prop.
  }, [id]);


  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a variant!");
      return;
    }

    // Add product with selected variant and quantity to cart
    // You can manage the cart state using React Context or another state management approach.
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={product.photo_md}
          alt={product.imageAlt}
          className="w-full lg:w-1/4 object-cover object-center aspect-square"
        />
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-mogena text-trippicalBlack">
            {product.name}
          </h1>
          <p className="text-lg text-logoRed">
            IDR {Math.round(product.min_sell_price / 1000)} /{" "}
            {Math.round(product.max_sell_price / 1000)}
          </p>
          <p className="text-md text-trippicalBlack">
            {product.description ? product.description : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
          </p>

          {/* Variant Selector */}
          <VariantSelector variants={product.variants} />

          {/* Quantity Selector */}
          <div className="mt-4">
            <label className="text-sm font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-2 p-2 border border-gray-300"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full p-3 bg-logoRed text-white font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <ProductDetailSection />
    </>
  );
};

export default ProductDetail;
