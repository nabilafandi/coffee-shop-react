/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addCartItem } from "../../services/cartApi";
import { fetchProductDetailsData } from "../../services/apiProduct";

import { ProductImageGallery } from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";
import { VariantSelector } from "./VariantSelector";
import { RelatedProduct } from "./RelatedProduct";
import {AddToCartButton} from "./AddToCartButton";


// Utility function to format prices

const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedVariant, setSelectedVariant] = useState({});
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
    console.log("dataa adtcart:", data);
    if (Object.keys(selectedVariant).length !== data.attributes.length) {
      alert("Please select a variant for each option!");
      return;
    }
    console.log("selectedVariant", selectedVariant);
    const selectedValueIds = Object.values(selectedVariant);
    console.log("selectedValueIds", selectedValueIds);
    await addCartItem(null, productId, selectedValueIds, quantity);
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

          <AddToCartButton
            productId={productId}
            selectedVariant={selectedVariant}
            quantity={quantity}
            attributes={data.attributes}
          />
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

export default ProductDetails;
