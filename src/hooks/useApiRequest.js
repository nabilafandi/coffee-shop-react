import { useState } from "react";

const useApiRequest = () => {
  const [isLoading, setIsLoading] = useState(false);

  const makeApiRequest = async (apiCall) => {
    if (isLoading) return; // Prevent further clicks
    setIsLoading(true);

    try {
      await apiCall();
    } catch (error) {
      console.error(error.message); // Handle the error
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, makeApiRequest };
};

export default useApiRequest;
