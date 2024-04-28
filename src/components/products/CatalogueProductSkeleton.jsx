import React from "react";
import BlankImage from "../../../public/images/blank-image.svg";
import { BiHeart } from "react-icons/bi";

const CatalogueProductSkeleton = () => {
  return (
    <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md animate-pulse">
      {/* Product Image */}
      <div className="md:w-56 rounded-t-md h-[180px] md:h-[250px] flex justify-center items-center bg-gray-400">
        <img
          src={BlankImage}
          className="w-[80px] md:w-[150px] object-cover rounded-t-md"
          alt={"Blank Image"}
        />
      </div>
      <div className="relative p-3">
        <div className="bg-gray-400 rounded-full h-4 mb-2"></div>
        <div className="bg-gray-400 rounded-full w-3/4 h-4"></div>
        <div className="flex gap-2 items-center">
          <p className="bg-gray-400 rounded-full h-3 w-[100px] mt-2"></p>
          <p className="bg-gray-400 rounded-full h-3 w-[80px] mt-2"></p>
        </div>

        <div className="flex gap-3 items-center">
          {/* Add to cart button */}
          <div className="bg-gray-500 text-gray-400 py-2 rounded-md mt-2 flex justify-center gap-1 md:gap-3 items-center w-full">
            Add to cart
          </div>
          {/* Like button */}
          <div className="text-dark hidden bg-gray-400 mt-2 w-10 h-10 rounded-md md:flex justify-center items-center">
            <BiHeart className="text-2xl text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueProductSkeleton;
