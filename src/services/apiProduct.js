import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_REACT_API_URL; // Use environment variables

export const fetchCategoryData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/category`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
};
export const fetchProductListData = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/category/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
};
export const fetchProductDetailsData = async (product_id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/${product_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
};

