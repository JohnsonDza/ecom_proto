import { productData } from './productData';

export const fetchProductData = async () => {
  try {
    // Simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));
    return productData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
