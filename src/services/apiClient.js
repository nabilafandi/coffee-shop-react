import axios from "axios";

const apiUrl = '/odoo-api';

// Fetch cart data
export const fetchCart = async (userId = null) => {
  try {
    const response = await axios.get(`${apiUrl}/cart`, {
      params: { userId },
      withCredentials: true,
    });
    console.log("Cart response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw new Error("Failed to load cart");
  }
};

// Place order as a guest
export const buyAsGuest = async (items) => {
  try {
    const response = await axios.post(
      `${apiUrl}/order`,
      { items },
      { withCredentials: true }
    );
    return response.data
  } catch (error) {
    console.error("Error buying as guest:", error);
    throw new Error("Failed to place order");
  }
};

export const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`${apiUrl}/product/${productId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw new Error("Failed to load product details");
    }
  };
  
  // Add product to cart
  export const addToCart = async (itemsToAdd) => {
    try {
      const response = await axios.post(
        `${apiUrl}/cart`,
        { userId: null, items: itemsToAdd },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding product to cart:", error);
      throw new Error("Failed to add product to cart");
    }
  };