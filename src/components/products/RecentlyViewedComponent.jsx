import React from "react";
import { mobileProducts } from "../../data/StaticData";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import RecentlyViewedProductSkeleton from "./RecentlyViewedProductSkeleton";

const RecentlyViewedComponent = ({ loading }) => {
  function generateProducts() {
    const products = [];
    for (let i = 0; i < 5; i++) {
      products.push(<RecentlyViewedProductSkeleton key={i} />);
    }
    return products;
  }

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      {loading && (
        <div className="flex md:flex-nowrap gap-5 mt-2 pb-4">
          {generateProducts()}
        </div>
      )}

      {!loading && (
        <div className="flex md:flex-nowrap gap-3 md:gap-5 mt-2 pb-4">
          {mobileProducts.slice(1, 10).map((recent, index) => (
            <div
              key={index}
              className="min-w-56 md:w-80 bg-white dark:bg-dark rounded-md flex flex-col shadow-lg"
            >
              {/* Product Image */}
              <img
                src={recent.images[0]}
                className="w-full h-[200px] md:h-[280px] object-cover rounded-t-md"
                alt={recent.title}
              />
              <div className="relative p-3">
                <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                  {recent.title}
                </h1>
                <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                  <p className="text-md leading-tight font-normal text-gray-500 dark:text-gray-400 line-through">
                    {recent.price}
                  </p>
                  <p className="text-md leading-tight font-semibold text-primary dark:text-slate-200">
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
      )}
    </div>
  );
};

export default RecentlyViewedComponent;
