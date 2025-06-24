import axios from "axios";

const API_BASE_URL = '/odoo-api'; // Use environment variables

export const fetchCategoryData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/product/category`);
    console.log("response category", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
};
export const fetchProductListData = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/product/category/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
};

// TODO: block non website products from being shown in product details
export const fetchProductDetailsData = async (product_id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/product/${product_id}`);
    console.log("response productdetail", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
};

