/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { addToCart } from "../services/apiClient";
import { fetchProductDetailsData } from "../services/apiProduct";

// Utility function to format prices
const formatPrice = (price) => Math.round(price / 1000);

const ProductDetails = () => {
  const { productId } = useParams();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProductDetailsData(productId);
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleQuantityChange = (newQuantity) => setQuantity(newQuantity);
  const handleAddToCart = async () => {
    if (Object.keys(selectedVariant).length !== data.attributes.length) {
      alert("Please select a variant for each option!");
      return;
    }
    const itemsToAdd = [
      {
        productName: product.name,
        variantName: selectedVariant.name,
        productId: product.id,
        productVariantId: selectedVariant.id,
        quantity,
        isVariant: true,
        price: Number(selectedVariant.sell_price),
        imageUrl: product.photo_xs,
      },
    ];
    if (loading) return;
    setLoading(true);
    try {
      await addToCart(itemsToAdd);
      setIsCartOpen(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeCartPopup = () => setIsCartOpen(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col max-w-2xl">
      <div className="flex">
        <div className="grid gap-4 max-w-sm">
          <ProductImageGallery images={data.images} />
        </div>

        <div className="pl-8 flex flex-col justify-between w-full">
          <ProductInfo product={data} />

          <VariantSelector
            variants={data.attributes}
            selectedVariant={selectedVariant}
            onVariantChange={setSelectedVariant}
          />
          
          {/* <QuantitySelector onQuantityChange={handleQuantityChange} /> */}

          <div>
            <button
              onClick={handleAddToCart}
              disabled={loading}
              className="p-2 w-40 space-x-3 text-trippicalBlack flex border border-trippicalBlack rounded-full align-middle justify-center"
            >
              {/* <HiOutlineShoppingBag size={23} /> */}
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
      <div className="w-full py-16">
        <h2 className="text-3xl font-mogena text-trippicalBlack">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10">
          {data.related_products.map((relatedProduct) => (
            <RelatedProduct key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductImageGallery = ({ images }) => (
  <>
    <div>
      <img
        className="h-auto w-full object-cover object-center aspect-square rounded-lg"
        src={images[0].image_url}
      />
    </div>
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id}>
          <img className="h-auto w-full object-cover object-center aspect-square rounded-lg" src={image.image_url} alt="Product Image" />
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
      IDR {formatPrice(product.price)} / {formatPrice(product.price)}
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
    <div className="mt-2 grid grid-cols-1 gap-2"> {/* Modified grid-cols-2 to grid-cols-1 */}
      {variants?.map((variant) => (
        <div key={variant.id}>
          <p> {variant.name}</p>
          <RadioGroup
            value={selectedVariant?.[variant.id] || null} // Use optional chaining and default to null
            onChange={(value) => {
              // Create a copy of the selectedVariant and update only the current variant
              const newSelectedVariant = { ...selectedVariant, [variant.id]: value };
              onVariantChange(newSelectedVariant);
            }}
            aria-label={variant.name}
          >
            {variant.values?.map((value) => (
              <Field key={value.id} className="flex items-center gap-2">
                <Radio
                  value={value.name}
                  id={value.id}
                  className="group flex items-center justify-center rounded-md border border-trippicalBlack bg-transparent data-[checked]:bg-trippicalBlack"
                >
                  <FaCheck className="invisible rounded-sm text-offWhite text-xs group-data-[checked]:visible" />
                </Radio>
                <Label htmlFor={value.id}>{value.name}</Label>
              </Field>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  </div>
);

// Related Products component
const RelatedProduct = ({ product }) => (
  <div>
    <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
      <img
        alt={product.name}
        src={product.images[0]?.image_url}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div>
      <p className="text-lg font-semibold text-trippicalBlack">
        {product.name}
      </p>
      <p className="text-lg font-semibold text-darkRed">
        IDR {formatPrice(product.price)} /{" "}
        {formatPrice(product.price)}
      </p>
    </div>
  </div>
);

export default ProductDetails;
