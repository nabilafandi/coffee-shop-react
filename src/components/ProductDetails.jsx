/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CartPopup from "./CartPopup";
import QuantitySelector from "./QuantitySelector";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

// Utility function to format prices
const formatPrice = (price) => Math.round(price / 1000);

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const apiUrl = import.meta.env.VITE_REACT_API_URL;
        const response = await axios.get(
          `${apiUrl}/products/${Number(productId)}`
        );
        setProduct(response.data.data.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const handleQuantityChange = (newQuantity) => setQuantity(newQuantity);

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      alert("Please select a variant!");
      return;
    }

    // const itemsToAdd = [
    //   {
    //     productId: selectedVariant.id,
    //     variant: selectedVariant,
    //     quantity,
    //   },
    // ];
    console.log('seletecvariant', selectedVariant)
    const itemsToAdd = [
      {
        productName: product.name,
        variantName: selectedVariant.name,
        productId: selectedVariant.id,
        quantity,
        isVariant: true,
        price: Number(selectedVariant.sell_price),
        imageUrl: product.photo_xs,
      }
    ];

    console.log("itemstoad", itemsToAdd);
    try {
      const apiUrl = import.meta.env.VITE_REACT_API_URL;
      const response = await axios.post(
        `${apiUrl}/cart`,
        { userId: null, items: itemsToAdd },
        { withCredentials: true }
      );
      console.log("Cart updated:", response.data);
      setIsCartOpen(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart. Please try again.");
    }
  };

  const closeCartPopup = () => setIsCartOpen(false);

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log("productdfetail", product);
  return (
    <div className="flex flex-col max-w-2xl">
      {/* Product Images */}
      <div className="flex">
        <div className="grid gap-4 max-w-sm">
          <ProductImageGallery images={product.photos} />
        </div>

        {/* Product Info */}
        <div className="pl-8 flex flex-col justify-between w-full">
          <ProductInfo product={product} />

          {/* Variant Selector */}
          <VariantSelector
            variants={product.variant}
            selectedVariant={selectedVariant}
            onVariantChange={setSelectedVariant}
          />

          {/* Quantity Selector */}
          <QuantitySelector onQuantityChange={handleQuantityChange} />

          {/* Add to Cart Button */}
          <div>
            <button
              onClick={handleAddToCart}
              className="p-2 w-40 space-x-3 text-trippicalBlack flex border border-trippicalBlack rounded-full align-middle justify-center"
            >
              <HiOutlineShoppingBag size={23} />
              <span> Add to Cart</span>
            </button>
            {isCartOpen && (
              <CartPopup
                onClose={closeCartPopup}
                selectedVariant={selectedVariant}
              />
            )}
          </div>
        </div>
      </div>

      {/* Customers also purchased */}
      {/* <div className="w-full py-16">
        <h2 className="text-3xl font-mogena text-trippicalBlack">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10">
          {product.relatedProducts.map((relatedProduct) => (
            <RelatedProduct key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

// Component for displaying the product images
const ProductImageGallery = ({ images }) => (
  <>
    <div>
      <img
        className="h-auto w-full object-cover object-center aspect-square rounded-lg"
        src={images[0].photo_md}
      />
    </div>
    <div className="grid grid-cols-3 gap-4">
      {images?.map((image, index) => (
        <div key={index}>
          <img
            className="h-auto w-full object-cover object-center aspect-square rounded-lg"
            src={image.photo_xs}
            alt="Product Image"
          />
        </div>
      ))}
    </div>
  </>
);

// Component for displaying product info like name, price, description
const ProductInfo = ({ product }) => (
  <div>
    <h1 className="text-3xl font-mogena text-trippicalBlack">{product.name}</h1>
    <p className="text-lg text-logoRed">
      IDR {formatPrice(product.min_sell_price)} /{" "}
      {formatPrice(product.max_sell_price)}
    </p>
    <p className="text-md text-trippicalBlack mt-5">
      {product.description || "lorem ipsum lorem ipsum lorem ipsum"}
    </p>
  </div>
);

// Variant Selector component
const VariantSelector = ({ variants, selectedVariant, onVariantChange }) => (
  <div>
    <h3 className="text-sm font-bold">Choose a variant:</h3>
    <div className="mt-2 grid grid-cols-2 gap-2">
      <RadioGroup
        value={selectedVariant}
        onChange={onVariantChange}
        aria-label="Variant"
      >
        {variants?.map((variant) => (
          <Field key={variant.id} className="flex items-center gap-2">
            <Radio
              value={variant}
              id={variant.id}
              className="group flex items-center justify-center rounded-md border border-trippicalBlack bg-transparent data-[checked]:bg-trippicalBlack"
            >
              <FaCheck className="invisible rounded-sm text-offWhite text-xs group-data-[checked]:visible" />
            </Radio>
            <Label htmlFor={variant.id}>{variant.name}</Label>
          </Field>
        ))}
      </RadioGroup>
    </div>
  </div>
);

// Related Products component
const RelatedProduct = ({ product }) => (
  <div>
    <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
      <img
        alt={product.name}
        src={product.photo_md}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div>
      <p className="text-lg font-semibold text-trippicalBlack">
        {product.name}
      </p>
      <p className="text-lg font-semibold text-darkRed">
        IDR {formatPrice(product.min_sell_price)} /{" "}
        {formatPrice(product.max_sell_price)}
      </p>
    </div>
  </div>
);

export default ProductDetails;
