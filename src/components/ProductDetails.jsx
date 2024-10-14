/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dummyProducts from "../data/dummyProducts";

import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";

// const getCategoryOptions = (product) => {
//   // Parse variants into separate categories (e.g., ["Hot", "Single"])
//   const parsedVariants = product.collections.map((variant) => ({
//     ...variant,
//     parsedName: variant.name.split(","),
//   }));

//   const categoryOptions = parsedVariants
//     .reduce((acc, variant) => {
//       variant.parsedName.forEach((value, index) => {
//         if (!acc[index]) {
//           acc[index] = new Set();
//         }
//         acc[index].add(value);
//       });
//       return acc;
//     }, [])
//     .map((category) => Array.from(category));

//   return categoryOptions;
// };
const QuantitySelector = ({
  initialQuantity = 1,
  min = 0,
  max = 1000,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="mt-4">
      <label className="text-sm font-bold">Quantity</label>
      <div className="flex items-center space-x-2 text-trippicalBlack">
        <button
          onClick={handleDecrement}
          className=""
          disabled={quantity <= min}
        >
          <CiSquareMinus size={26} className="text-trippicalBlack" />
        </button>
        <span className="">{quantity}</span>
        <button
          onClick={handleIncrement}
          className=""
          disabled={quantity >= max}
        >
          <CiSquarePlus size={26} className="text-trippicalBlack" />
        </button>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Find the product in the dummy data
    const categoryProducts = dummyProducts[category];
    if (categoryProducts) {
      const foundProduct = categoryProducts.find(
        (p) => p.id === Number(productId)
      );
      setProduct(foundProduct);
    }
  }, [category, productId]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a variant!");
      return;
    }

    // Add product with selected variant and quantity to cart
    // You can manage the cart state using React Context or another state management approach.
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="flex">
      <div className="pr-9">
        <div className="">
          <img
            src={product.photo_md}
            alt={product.imageAlt}
            className="w-full object-cover object-center aspect-square"
          />
        </div>
        <div className="flex">
          <img
            src={product.photo_md}
            alt={product.imageAlt}
            className="w-1/3 object-cover object-center aspect-square"
          />
          <img
            src={product.photo_md}
            alt={product.imageAlt}
            className="w-1/3 object-cover object-center aspect-square"
          />
          <img
            src={product.photo_md}
            alt={product.imageAlt}
            className="w-1/3 object-cover object-center aspect-square"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-mogena text-trippicalBlack">
          {product.name}
        </h1>
        <p className="text-lg text-logoRed">
          IDR {Math.round(product.min_sell_price / 1000)} /{" "}
          {Math.round(product.max_sell_price / 1000)}
        </p>
        <p className="text-md text-trippicalBlack">
          {product.description
            ? product.description
            : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
        </p>

        {/* Variant Selector */}
        <div className="mt-4">
          <h3 className="text-sm font-bold">Choose a variant:</h3>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <RadioGroup
              value={selectedVariant}
              onChange={setSelectedVariant}
              aria-label="Variant"
            >
              {product.variants.map((variant) => (
                <Field key={variant.id} className="flex items-center gap-2">
                  <Radio
                    value={variant.id}
                    id={variant.id}
                    className="group flex size-5 items-center justify-center rounded-md border border-trippicalBlack bg-transparent data-[checked]:bg-trippicalBlack"
                  >
                    <FaCheck className="invisible rounded-sm text-offWhite text-xs  group-data-[checked]:visible" />
                  </Radio>
                  <Label htmlFor={variant.id}>{variant.name}</Label>
                </Field>
              ))}
            </RadioGroup>
          </div>
        </div>

        <QuantitySelector onQuantityChange={handleQuantityChange} />

        {/* Add to Cart Button */}
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            className="p-2 w-40 space-x-3  text-trippicalBlack flex border border-trippicalBlack rounded-full align-middle justify-center"
          >
            <HiOutlineShoppingBag size={23} />
            <span> Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
