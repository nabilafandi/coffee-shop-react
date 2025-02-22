import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_REACT_API_URL; // Use environment variables

export const fetchAboutUsData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/about-us`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchHomeData = async () => {
    try {
    const response = await axios.get(`${API_BASE_URL}/home`);
    return response.data;
    } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
    }
}
export const fetchLocationData = async () => {
    try {
    const response = await axios.get(`${API_BASE_URL}/location`);
    return response.data;
    } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
    }
}
export const fetchPromoData = async () => {
    try {
    const response = await axios.get(`${API_BASE_URL}/promo`);
    return response.data;
    } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
    }
}