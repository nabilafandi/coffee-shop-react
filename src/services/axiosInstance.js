import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/odoo-api",
  withCredentials: true,
});

export default axiosInstance;
