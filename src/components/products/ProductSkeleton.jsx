import React from "react";
import useScreenSize from "../../hooks/useScreenSize.mjs";

const ProductSkeleton = () => {
  const isMobile = useScreenSize();
  return (
    <div className="pb-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto py-5 mb-5 animate-pulse">
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
          <div className="w-full md:w-1/2">
            <div className="w-full h-[500px] bg-gray-400 rounded-lg"></div>

            <div className="flex gap-5 justify-center items-center mt-5">
              <div className="w-[100px] h-[100px] bg-gray-400 rounded-lg"></div>
              <div className="w-[100px] h-[100px] bg-gray-400 rounded-lg"></div>
              <div className="w-[100px] h-[100px] bg-gray-400 rounded-lg"></div>
              <div className="w-[100px] h-[100px] bg-gray-400 rounded-lg"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full bg-gray-400 h-5 rounded-full mb-2"></div>
            <div className="flex flex-col gap-3">
              <div className="w-2/3 h-5 bg-gray-400 rounded-full mb-6"></div>
              <div className="w-full h-4 bg-gray-400 rounded-full"></div>
              <div className="w-full h-4 bg-gray-400 rounded-full"></div>
              <div className="w-full h-4 bg-gray-400 rounded-full"></div>
              <div className="w-full h-4 bg-gray-400 rounded-full"></div>
              <div className="w-1/2 h-4 bg-gray-400 rounded-full mb-5"></div>

              <div className="w-1/3 h-10 bg-gray-400 rounded-full"></div>

              <div className="flex gap-3 items-center mb-5">
                <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
              </div>

              <div className="flex gap-5 items-center mb-5">
                <div className="w-1/3 h-14 bg-gray-400 rounded-xl"></div>
                <div className="w-1/3 h-14 bg-gray-400 rounded-xl"></div>
              </div>

              <div className="w-1/3 h-5 bg-gray-400 rounded-full"></div>
              <div className="w-1/3 h-5 bg-gray-400 rounded-full"></div>

              <div className="flex gap-5 items-center mb-5 mt-5 md:mt-10">
                <div className="w-[80px] h-4 bg-gray-400 rounded-full hidden md:block"></div>
                <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
