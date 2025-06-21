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
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-green-600">
              Item added to cart successfully!
            </p>
            <button
              onClick={closeDialog}
              className="mt-4 px-4 py-2 bg-logoRed text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
