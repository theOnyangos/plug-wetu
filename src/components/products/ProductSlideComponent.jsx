import React from "react";
import { fusionProducts } from "../../data/StaticData.js";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import RecentlyViewedProductSkeleton from "./RecentlyViewedProductSkeleton";
import { useNavigate } from "react-router-dom";

const ProductSlideComponent = ({ loading }) => {
  const navigate = useNavigate();

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
        <div className="flex md:flex-nowrap gap-5 mt-2 pb-4 pl-3 md:pl-0">
          {generateProducts()}
        </div>
      )}

      {!loading && (
        <div className="flex md:flex-nowrap gap-3 md:gap-5 mt-2 pb-4 pl-3 md:pl-0">
          {fusionProducts.slice(1, 10).map((recent, index) => (
            <div
              key={index}
              className="min-w-56 md:w-80 bg-white dark:bg-dark rounded-md flex flex-col shadow-lg"
            >
              {/* Product Image */}
              <img
                onClick={() => {
                  navigate(`/product-details/${recent.slug}`, {
                    state: { recent },
                  });
                }}
                src={recent.thumbnail}
                className="w-full h-[280px] object-cover rounded-t-md cursor-pointer"
                alt={recent.title}
              />
              <div className="relative p-3">
                <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                  {recent.title}
                </h1>
                <div className="flex flex-col md:flex-row md:gap-2 md:items-center mb-2">
                  <p className="text-xl tracking-tight font-semibold text-primary dark:text-slate-200">
                    KES {recent.discount_price}
                  </p>
                  <p className="text-md leading-none font-normal text-gray-500 dark:text-gray-400 line-through">
                    KES {recent.price}
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

export default ProductSlideComponent;
