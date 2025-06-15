/* eslint-disable react/prop-types */

import { useState } from "react";
import { addCartItem } from "../../services/cartApi";

export const AddToCartButton = ({ productId, selectedVariant, quantity, attributes }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = async () => {
    if (Object.keys(selectedVariant).length !== attributes.length) {
      alert("Please select a variant for each option!");
      return;
    }

    const selectedValueIds = Object.values(selectedVariant);
    await addCartItem(null, productId, selectedValueIds, quantity);
    setIsDialogOpen(true); // Open the dialog after adding to cart
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