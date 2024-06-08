import React, { useContext } from "react";
import { ProductDetailsContext } from "@/context/ProductDetailsContext";
import { RatingOverview } from "@/components";

const RatingComponent = () => {
  const { productDetails } = useContext(ProductDetailsContext);
  return (
    <section className="md:container md:mx-auto mt-5">
      <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
        {/* Rating Overview */}
        <div className="md:flex md:justify-start">
          <div className="md:w-[100%]">
            <RatingOverview
              ratingDistribution={productDetails?.ratingDistribution}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingComponent;
