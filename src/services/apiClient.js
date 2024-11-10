import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_API_URL;

// Fetch cart data
export const fetchCart = async (userId = null) => {
  try {
    const response = await axios.get(`${apiUrl}/cart`, {
      params: { userId },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw new Error("Failed to load cart");
  }
};

// Place order as a guest
export const buyAsGuest = async (items) => {
  try {
    await axios.post(
      `${apiUrl}/order`,
      { items },
      { withCredentials: true }
    );
  } catch (error) {
    console.error("Error buying as guest:", error);
    throw new Error("Failed to place order");
  }
};
