import { Outlet } from "react-router-dom";
import { ReviewPopup } from "@/components";
import { reviews } from "@/data/StaticData";
import { ProductDetailsProvider } from "@/context/ProductDetailsContext";

const OpenRoutes = () => {
  return (
    <ProductDetailsProvider>
      {/* Site Body */}
      <Outlet />

      {/* Review Popup */}
      <ReviewPopup reviews={reviews} />
    </ProductDetailsProvider>
  );
};

export default OpenRoutes;
