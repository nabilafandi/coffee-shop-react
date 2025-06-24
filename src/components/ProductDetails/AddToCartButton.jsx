/* eslint-disable react/prop-types */

import { useState } from "react";
import { addCartItem } from "../../services/cartApi";

export const AddToCartButton = ({
  productVariantId,
  productId,
  selectedVariant,
  selectedAddons,
  quantity,
  attributes,
  product
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const images = product?.images || [];
  const productName = product?.name || "";
  const selectedVariantName = selectedVariant?.name || "";
  const basePrice = selectedVariant?.price || product?.price || 0;
  const addonsTotal = 12
  const subtotal = (basePrice + addonsTotal) * (quantity || 1);

  const handleAddToCart = async () => {
    // Get value ids for "always"
    const selectedValueIds = attributes
      .filter((attr) => attr.create_variant === "always")
      .map((attr) => selectedVariant[attr.id])
      .filter(Boolean);

    // Get value ids for "never" (addons)
    const addonValueIds = attributes
      .filter((attr) => attr.create_variant === "no_variant")
      .flatMap((attr) =>
        Array.isArray(selectedAddons?.[attr.id]) ? selectedAddons[attr.id] : []
      );
    console.log("addonValueIds", addonValueIds);

    let singleProductVariantId = null;
    if (selectedValueIds.length === 0) {
      singleProductVariantId = productVariantId;
    }

    await addCartItem(
      singleProductVariantId,
      productId,
      selectedValueIds,
      addonValueIds,
      quantity
    );
    setIsDialogOpen(true);
  };

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="p-2 w-40 space-x-3 text-trippicalBlack flex border border-trippicalBlack rounded-full align-middle justify-center"
      >
        <span>Add to Cart</span>
      </button>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#f7f2e9] p-6 rounded-xl shadow-lg w-[95vw] max-w-md text-center">
            <p className="text-xl font-semibold mb-6">
              Item Added to your Cart!
            </p>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={images?.[0]?.image_url || "/placeholder.png"}
                alt={productName}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 text-left">
                <div className="font-semibold text-lg">
                  {productName}
                  {selectedVariantName ? `, ${selectedVariantName}` : ""}
                </div>
                <button
                  onClick={closeDialog}
                  className="text-red-500 hover:underline text-sm mt-1"
                >
                  Remove
                </button>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-base">{quantity}</span>
                <span className="text-logoRed font-semibold text-base">
                  IDR {subtotal?.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-lg">Subtotal</span>
              <span className="text-logoRed font-semibold text-lg">
                IDR {subtotal?.toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={closeDialog}
                className="mt-4 px-4 py-2 bg-logoRed text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
