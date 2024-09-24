
import Navbar from "../components/Navbar";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const ProductDetailSection = () => {
  const { id } = useParams();
  const location = useLocation();

  const {product} = location.state
  // const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  console.log('product', product)

  useEffect(() => {
    // Fetch product data by ID (from API or state)
    // Example: fetchProductById(id).then(data => setProduct(data));
    // For now, assume product is fetched or passed as prop.
  }, [id]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

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
        <img src={product.photo_md} alt={product.imageAlt} className="w-full lg:w-1/2" />
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-trippicalBlack">{product.name}</h1>
          <p className="text-lg text-logoRed">IDR {product.min_sell_price} - {product.max_sell_price}</p>

          {/* Variant Selector */}
          <div className="mt-4">
            <label className="text-sm font-medium">Choose a variant:</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`p-2 border ${selectedVariant?.id === variant.id ? "border-logoRed" : "border-gray-300"}`}
                  onClick={() => handleVariantChange(variant)}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

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
