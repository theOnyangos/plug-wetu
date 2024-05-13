import React from "react";
import { forEach } from "lodash";
import BlankImage from "../../../public/images/empty-image.png";

const RecentlyViewedProductSkeleton = () => {
  return (
    <div className="min-w-56 md:w-80 bg-white dark:bg-dark rounded-md flex flex-col shadow-lg animate-pulse">
      {/* Product Image */}
      <div className="w-56 rounded-t-md h-[280px] flex justify-center items-center bg-gray-400">
        <img
          src={BlankImage}
          className="w-[150px] object-cover rounded-t-md"
          alt={"Blank Image"}
        />
      </div>
      <div className="relative p-3">
        <div className="bg-gray-400 rounded-full h-4"></div>
        <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
          <p className="bg-gray-400 rounded-full h-3 w-[100px] mt-2"></p>
          <p className="bg-gray-400 rounded-full h-3 w-[80px] mt-2"></p>
        </div>
        {/* Star Rating */}
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="bg-gray-400 rounded-full h-3 w-[20px] mt-2"
              />
            ))}
          </div>
          <span className="bg-gray-400 rounded-full h-3 w-[50px] mt-2"></span>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedProductSkeleton;
