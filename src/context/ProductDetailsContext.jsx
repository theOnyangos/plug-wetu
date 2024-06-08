import React, { createContext, useState } from "react";
import {
  reviews as productReviews,
  fusionProducts as products,
} from "@/data/StaticData";

export const ProductDetailsContext = createContext();

export const ProductDetailsProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState({});
  const [reviews, setReviews] = useState([]);

  // Get the product details
  const getProductDetails = (slug) => {
    const slugProduct = products.find((product) => product.slug === slug);
    // OR perform a request to API to get the product details

    setProductDetails(slugProduct);
  };

  // Get the product slug
  const getUrlSlug = (pathname) => {
    if (!pathname) return "";

    const normalizedPath = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
    return normalizedPath.substring(normalizedPath.lastIndexOf("/") + 1);
  };

  // Get product reviews
  const getLimitedReviews = (productId) => {
    const foundReviews = productReviews.filter(
      (review) => review.productId === productId
    );

    // Perform a request to API to get the product reviews
    setReviews(foundReviews);
  };

  const getReviews = (productId) => {
    // Perform a request to API to get the product reviews
    setReviews(productReviews);
  };

  return (
    <ProductDetailsContext.Provider
      value={{
        reviews,
        getReviews,
        getUrlSlug,
        productDetails,
        setProductDetails,
        getProductDetails,
        getLimitedReviews,
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};
