import React from "react";
import { fusionProducts } from "../../data/StaticData";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const RecentlyViewedComponent = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="flex md:flex-nowrap gap-5 mt-2 pb-4">
        {fusionProducts.slice(1, 10).map((recent, index) => (
          <div
            key={index}
            className="min-w-56 md:w-80 bg-white dark:bg-dark rounded-md flex flex-col shadow-lg"
          >
            {/* Product Image */}
            <img
              src={recent.image}
              className="w-full h-[280px] object-cover rounded-t-md"
              alt={recent.title}
            />
            <div className="relative p-3">
              <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                {recent.title}
              </h1>
              <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                <p className="text-md font-normal text-gray-500 dark:text-gray-400 line-through">
                  {recent.price}
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  {recent.discount_price}
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStarHalf className="text-orange-500 dark:text-yellow-500" />
                  <BiStar className="text-orange-500 dark:text-yellow-500" />
                </div>
                <span className="dark:text-gray-500 text-sm">(56)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewedComponent;
