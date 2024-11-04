/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dummyProducts from "../data/dummyProducts";
import CartPopup from "./CartPopup";
import axios from "axios";

import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";

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
    <>
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
    </>
  );
};

const ProductDetails = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      alert("Please select a variant!");
      return;
    }
    const itemsToAdd = [
      { productId: productId, variant: selectedVariant, quantity },
    ];
    console.log(itemsToAdd)
    try {
      const apiUrl = import.meta.env.VITE_REACT_API_URL;
      console.log(apiUrl)

      const response = await axios.post(apiUrl + "/cart",{
        userId: null, // or pass a valid user ID if needed
        items: itemsToAdd,
    }, {
        withCredentials: true, // Ensure cookies are sent
    });
      console.log("Cart updated:", response.data);
      setIsCartOpen(true); // Open the cart popup
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart. Please try again.");
    }
    setIsCartOpen(true);
  };

  const closeCartPopup = () => {
    setIsCartOpen(false); // Close the cart popup
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="flex flex-col max-w-2xl">
      <div className="flex ">
        <div className="grid gap-4 max-w-sm">
          <div>
            <img
              className="h-auto w-full object-cover object-center aspect-square rounded-lg"
              src={product.photo_md}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                className="h-auto w-full object-cover object-center aspect-square rounded-lg"
                src={product.photo_md}
              />
            </div>
            <div>
              <img
                className="h-auto w-full object-cover object-center aspect-square rounded-lg"
                src={product.photo_md}
              />
            </div>
            <div>
              <img
                className="h-auto w-full object-cover object-center aspect-square rounded-lg"
                src={product.photo_md}
              />
            </div>
          </div>
        </div>
        <div className="pl-8 flex flex-col justify-between w-full">
          <div>
            <h1 className="text-3xl font-mogena text-trippicalBlack">
              {product.name}
            </h1>
            <p className="text-lg text-logoRed">
              IDR {Math.round(product.min_sell_price / 1000)} /{" "}
              {Math.round(product.max_sell_price / 1000)}
            </p>
            <p className="text-md text-trippicalBlack mt-5">
              {product.description
                ? product.description
                : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
            </p>
          </div>

          {/* Variant Selector */}
          <div>
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
                      value={variant.name}
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

          <div>
            <QuantitySelector onQuantityChange={handleQuantityChange} />
          </div>

          {/* Add to Cart Button */}
          <div>
            <button
              onClick={handleAddToCart}
              className="p-2 w-40 space-x-3  text-trippicalBlack flex border border-trippicalBlack rounded-full align-middle justify-center"
            >
              <HiOutlineShoppingBag size={23} />
              <span> Add to Cart</span>
            </button>

            {/* Cart Popup */}
            {isCartOpen && (
              <CartPopup
                onClose={closeCartPopup}
                product={product}
                selectedVariant={selectedVariant}
                quantity={quantity}
              />
            )}
          </div>
        </div>
      </div>

      <div className="w-full py-16 ">
        <h2 className="text-3xl font-mogena text-trippicalBlack">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10">
          <div>
            <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 ">
              <img
                alt={product.imageAlt}
                src={product.photo_md}
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-trippicalBlack">
                {product.name}
              </p>
              <p className="text-lg font-semibold text-darkRed">
                IDR {Math.round(product.min_sell_price / 1000)} {" / "}
                {Math.round(product.max_sell_price / 1000)}
              </p>
            </div>
          </div>
          <div>
            <div className="w-full aspect-square overflow-hidden rounded-md   group-hover:opacity-75 ">
              <img
                alt={product.imageAlt}
                src={product.photo_md}
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-trippicalBlack">
                {product.name}
              </p>
              <p className="text-lg font-semibold text-darkRed">
                IDR {Math.round(product.min_sell_price / 1000)} {" / "}
                {Math.round(product.max_sell_price / 1000)}
              </p>
            </div>
          </div>
          <div>
            <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 ">
              <img
                alt={product.imageAlt}
                src={product.photo_md}
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-trippicalBlack">
                {product.name}
              </p>
              <p className="text-lg font-semibold text-darkRed">
                IDR {Math.round(product.min_sell_price / 1000)} {" / "}
                {Math.round(product.max_sell_price / 1000)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
