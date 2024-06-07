import React from "react";
import useScreenSize from "../../hooks/useScreenSize.mjs";

const ProductSkeleton = () => {
  const isMobile = useScreenSize();
  return (
    <div className="pb-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto py-5 md:mb-5 animate-pulse">
        <div className="flex gap-2 my-3 md:my-5">
          <p className="bg-gray-400 w-full h-5 rounded-full"></p>
          <p className="bg-gray-400 w-full h-5 rounded-full"></p>
          <p className="bg-gray-400 w-full h-5 rounded-full"></p>
          <p className="bg-gray-400 w-full h-5 rounded-full"></p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto animate-pulse">
        <div className="flex flex-col md:flex-row gap-5 items-start">
          <div className="w-full md:w-1/2 px-5 md:px-0">
            <div className="w-full h-[300px] md:h-[500px] bg-gray-400 rounded-lg"></div>

            <div className="flex gap-2 md:gap-5 justify-center items-center mt-5">
              <div className="w-[60px] h-[80px] bg-gray-400 rounded-lg"></div>
              <div className="w-[60px] h-[80px] bg-gray-400 rounded-lg"></div>
              <div className="w-[60px] h-[80px] bg-gray-400 rounded-lg"></div>
              <div className="w-[60px] h-[80px] bg-gray-400 rounded-lg"></div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            {/* Title */}
            <div className="w-full bg-gray-400 h-3 md:h-5 rounded-full mb-1 md:mb-8"></div>
            <div className="flex flex-col gap-1 md:gap-3">
              {/* Short Description */}
              <div className="w-full h-3 md:h-4 bg-gray-400 rounded-full"></div>
              <div className="w-full h-3 md:h-4 bg-gray-400 rounded-full"></div>
              <div className="w-1/2 h-3 md:h-4 bg-gray-400 rounded-full mb-3 md:mb-5"></div>

              {/* Price & Discount */}
              <div className="flex gap-2 items-center">
                <div className="w-1/3 h-5 md:h-8 bg-gray-400 rounded-lg"></div>
                <div className="w-1/3 h-5 md:h-8 bg-gray-400 rounded-lg"></div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 md:gap-3 items-center mb-3 mt-2">
                <div className="h-3 w-3 md:h-5 md:w-5 bg-gray-400 rounded-full"></div>
                <div className="h-3 w-3 md:h-5 md:w-5 bg-gray-400 rounded-full"></div>
                <div className="h-3 w-3 md:h-5 md:w-5 bg-gray-400 rounded-full"></div>
                <div className="h-3 w-3 md:h-5 md:w-5 bg-gray-400 rounded-full"></div>
                <div className="h-3 w-3 md:h-5 md:w-5 bg-gray-400 rounded-full"></div>
              </div>

              {/* Quantity */}
              <div className="flex gap-3 md:gap-5 items-center md:mt-2">
                <div className="w-[80px] h-3 md:h-4 bg-gray-400 rounded-full md:block"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-xl"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-xl"></div>
              </div>

              {/* Color Select */}
              <div className="flex gap-3 items-center md:mt-2">
                <div className="w-[50px] h-3 md:h-4 bg-gray-400 rounded-full md:block"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              </div>

              {/* Size Select */}
              <div className="flex gap-3 items-center md:mt-2">
                <div className="w-[80px] h-3 md:h-4 bg-gray-400 rounded-full md:block"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              </div>

              {/* Action Button */}
              <div className="flex gap-3 items-center mt-5">
                <div className="w-full h-10 bg-gray-400 rounded-lg"></div>
                <div className="w-full h-10 bg-gray-400 rounded-lg"></div>
              </div>

              {/* Wishlist Button */}
              <div className="flex gap-3 items-center mt-2">
                <div className="w-[80px] h-3 md:h-4 bg-gray-400 rounded-full md:block"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-xl"></div>
              </div>

              {/* Social Media Share */}
              <div className="flex gap-3 md:gap-5 items-center mb-5 md:mt-5">
                <div className="w-[50px] h-3 md:h-4 bg-gray-400 rounded-full md:block"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
