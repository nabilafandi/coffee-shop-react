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
};
export const fetchLocationData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/location`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchPromoData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/promo`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const loginToOdoo = async (email, password) => {
  const odooUrl = "/odoo-api";
  const dbName = "pallas";

  try {
    const response = await axios.post(`${odooUrl}/web/session/authenticate`, {
      jsonrpc: "2.0",
      params: {
        db: dbName,
        login: email,
        password: password,
      },
    });

    if (response.data.result) {
      return response.data.result; // Return session info or token
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    throw new Error("Failed to authenticate with Odoo");
  }
};

export const checkOdooSession = async () => {
  const odooUrl = "/odoo-api";
  try {
    const response = await axios.post(
      `${odooUrl}/web/session/get_session_info`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.error) {
      return null;
    }
    return response.data.result;
  } catch (error) {
    console.error("Error checking Odoo session:", error);
    return null;
  }
};
