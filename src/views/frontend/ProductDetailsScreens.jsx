import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useScreenSize from "@/hooks/useScreenSize";
import {
  Navigation,
  ThemeChanger,
  DynamicHelmet,
  ProductSkeleton,
  ProductDetailComponent,
  MobileDetailsNavigation,
} from "@/components";
import { ProductDetailsContext } from "@/context/ProductDetailsContext";

const ProductDetailsScreens = () => {
  const { getUrlSlug, getLimitedReviews, productDetails, getProductDetails } =
    useContext(ProductDetailsContext);
  const [currentProductDetails, setCurrentProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const isMobile = useScreenSize();
  const location = useLocation();
  const slug = getUrlSlug(location.pathname);

  useEffect(() => {
    getProductDetails(slug);

    if (productDetails) {
      getLimitedReviews(productDetails.id);
      setCurrentProductDetails(productDetails);
      setLoading(false);
    }
  }, [productDetails]);

  return (
    <>
      <DynamicHelmet
        title={`PLUG-WETU - ${currentProductDetails.title}`}
        description={`${currentProductDetails.short_description}`}
        seoImage={currentProductDetails.image}
        seoTitle={currentProductDetails.title}
        seoDescription={currentProductDetails.short_description}
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"Product Details"} />
      ) : (
        <Navigation />
      )}

      {!loading && <ProductDetailComponent />}

      {/* Skeleton loader */}
      {loading && <ProductSkeleton />}

      {/* Toast Notification */}
      <Toaster />

      {/* Theme Changer */}
      <ThemeChanger />
    </>
  );
};

export default ProductDetailsScreens;
