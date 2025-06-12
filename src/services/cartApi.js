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
export const addCartItem = async (
  product_id,
  product_template_id,
  attribute_value_ids,
  // product_custom_attribute_values = "[]",
  // variant_values,
  // no_variant_attribute_values = "[]",
  add_qty
) => {
  console.log(
    "addCartItem called with:",
    product_id,
    product_template_id,
    attribute_value_ids,
    add_qty
  );
  const res = await axios.post(
    "/api/cart/update",
    {
      product_id: product_id,
      product_template_id: parseInt(product_template_id),
      attribute_value_ids: attribute_value_ids,
      // product_custom_attribute_values: product_custom_attribute_values,
      // variant_values: variant_values,
      // no_variant_attribute_values: no_variant_attribute_values,
      add_qty: add_qty,
      display: false,
      force_create: true,
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
