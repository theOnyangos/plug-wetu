import React from "react";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import CatalogueProductSkeleton from "./CatalogueProductSkeleton";
import useTruncate from "../../hooks/useTruncate";

const CatalogueComponent = ({ catalogueData, loading }) => {
  const { truncateDescription } = useTruncate();

  function generateProducts() {
    const products = [];
    for (let i = 0; i < 10; i++) {
      products.push(<CatalogueProductSkeleton key={i} />);
    }
    return products;
  }
  return (
    <>
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5 mt-2">
          {generateProducts()}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 mt-2">
          {catalogueData.slice(0, 10).map((catalogue, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md"
            >
              {/* Product Image */}
              <div className="w-full bg-white flex justify-center items-center mx-auto pt-2 rounded-t-md">
                <img
                  src={catalogue.images[0]}
                  className="w-full md:h-full object-cover rounded-t-md"
                  alt={catalogue.title}
                />
              </div>
              <div className="relative p-3 flex flex-col justify-between h-full">
                <div className="">
                  <h1 className="text-base md:text-lg leading-tight font-semibold dark:text-slate-200 tracking-tighter">
                    {truncateDescription(catalogue.title, 20)}
                  </h1>
                  <div className="flex flex-col md:flex-row md:gap-2 md:items-center leading-tight">
                    <p className="text-sm md:text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                      Ksh {catalogue.price}
                    </p>
                    <p className="text-sm md:text-md font-semibold text-primary dark:text-slate-200">
                      Ksh {catalogue.discount_price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-3 items-center">
                  {/* Add to cart button */}
                  <button className="w-full text-sm md:text-base bg-darken text-white dark:bg-primary dark:text-slate-100 py-2 rounded-md mt-2 flex justify-center gap-1 md:gap-3 items-center">
                    Add to cart <BiCartAdd />
                  </button>
                  {/* Like button */}
                  <button className="text-dark hidden md:block bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                    <BiHeart className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CatalogueComponent;
