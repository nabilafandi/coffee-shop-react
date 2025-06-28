/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addCartItem } from "../../services/cartApi";
import { fetchProductDetailsData } from "../../services/apiProduct";

import { ProductImageGallery } from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";
import { VariantSelector } from "./VariantSelector";
import { RelatedProduct } from "./RelatedProduct";
import { AddToCartButton } from "./AddToCartButton";

// TODO: Allow user to click on customer also purchased products to view their details
const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedVariant, setSelectedVariant] = useState({});
  const [selectedAddons, setSelectedAddons] = useState({});
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
  }, [productId]);

  const handleAddToCart = async () => {
    if (Object.keys(selectedVariant).length !== data.attributes.length) {
      alert("Please select a variant for each option!");
      return;
    }
    const selectedValueIds = Object.values(selectedVariant);
    await addCartItem(null, productId, selectedValueIds, quantity);
  };

  const closeCartPopup = () => setIsCartOpen(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto px-2 sm:px-4 md:px-8">
      {/* Product Main Section */}
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="w-full  md:mr-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:max-w-sm">
              <ProductImageGallery images={data.images} />
            </div>

            <div className="flex-1 flex flex-col justify-between w-full mt-6 md:mt-0 md:pl-8">
              <ProductInfo product={data} />

              <div className="mt-4">
                <VariantSelector
      variants={data.attributes}
      selectedVariant={selectedVariant}
      selectedAddons={selectedAddons} // <-- ADD THIS
      onVariantChange={setSelectedVariant}
      onAddonChange={setSelectedAddons} // <-- ADD THIS
    />
              </div>

              {/* <QuantitySelector onQuantityChange={handleQuantityChange} /> */}

              <div className="mt-4">
                <AddToCartButton
                  productVariantId={data.variants[0]?.id}
                  productId={productId}
                  selectedVariant={selectedVariant}
                  selectedAddons={selectedAddons}
                  quantity={quantity}
                  attributes={data.attributes}
                  product={data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customers also purchased */}
      <div className="w-full py-10">
        <h2 className="text-2xl sm:text-3xl font-mogena text-trippicalBlack">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8">
          {data.related_products.map((relatedProduct) => (
            <RelatedProduct key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;