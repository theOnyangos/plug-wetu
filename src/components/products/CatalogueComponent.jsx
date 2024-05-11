import React from "react";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import CatalogueProductSkeleton from "./CatalogueProductSkeleton";

const CatalogueComponent = ({ catalogueData, loading }) => {
  function generateProducts() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      products.push(<CatalogueProductSkeleton key={i} />);
    }
    return products;
  }
  return (
    <>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-2">
          {generateProducts()}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-2">
          {catalogueData.map((catalogue, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md"
            >
              {/* Product Image */}
              <img
                src={catalogue.thumbnail}
                className="w-full h-[400px] object-cover rounded-t-md"
                alt={catalogue.title}
              />
              <div className="relative p-3">
                <h1 className="text-lg font-semibold dark:text-slate-200 tracking-tighter">
                  {catalogue.title}
                </h1>
                <div className="flex gap-2 items-center">
                  <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                    Ksh {catalogue.price}
                  </p>
                  <p className="text-md font-semibold text-primary dark:text-slate-200">
                    Ksh {catalogue.discount_price}
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  {/* Add to cart button */}
                  <button className="bg-darken text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                    Add to cart <BiCartAdd />
                  </button>
                  {/* Like button */}
                  <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
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
