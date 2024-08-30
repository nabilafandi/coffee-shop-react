import apiClient from "./apiClient";

const getAboutUs = async () => {
  try {
    const response = await apiClient.get("/api/about/testing");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { 
    getAboutUs,
 };
