import axios from "./axiosInstance";

export const getCart = async () => {
  const res = await axios.get("/api/cart/view");
  return res.data;
};
export const updateCartItem = async (productId, lineId, quantity) => {
  console.log("product line id quantiy", productId, lineId, quantity);
  const res = await axios.post(
    "/api/cart/update",
    {
      product_id: productId,
      line_id: lineId,
      set_qty: quantity,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("resss", res);
  return res.data;
};
export const addToCart = async (
  productId,
  add_qty = 1,
  set_qty = 0,
  product_custom_attribute_values = null,
  no_variant_attribute_value_ids = null
) => {
  try {
    const res = await axios.post(
      "/api/cart/add",
      {
        product_id: productId,
        add_qty: add_qty,
        set_qty: set_qty,
        product_custom_attribute_values: product_custom_attribute_values,
        no_variant_attribute_value_ids: no_variant_attribute_value_ids,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error; // Re-throw the error for the component to handle
  }
};
