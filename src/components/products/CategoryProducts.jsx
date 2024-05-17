import React from "react";
import {
  BiCartAdd,
  BiHeart,
  BiLogoWhatsapp,
  BiPhoneCall,
} from "react-icons/bi";
import CatalogueProductSkeleton from "./CatalogueProductSkeleton";

const CategoryProducts = ({ catalogueData, loading }) => {
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
                  <p className="text-xl font-semibold text-primary dark:text-slate-200 tracking-tight">
                    KES {catalogue.discount_price}
                  </p>
                  <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through tracking-tight">
                    KES {catalogue.price}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  {/* Add to cart button */}
                  <AddToCartButton title="Add to Cart" />

                  {/* Wishlist button */}
                  <WishlistButton title="" />

                  {/* Whatsapp Button */}
                  <WhatsappButton title="" />

                  {/* Call Button */}
                  <CallButton title="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const AddToCartButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-darken text-sm font-bold text-white dark:bg-cyan-500 dark:text-slate-100 py-2 px-5 rounded-md mt-2 flex gap-3 items-center"
    >
      {title} <BiCartAdd className="text-2xl md:hidden" />
    </button>
  );
};

const WishlistButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md"
    >
      {title} <BiHeart className="text-2xl" />
    </button>
  );
};

const WhatsappButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-dark bg-gray-300 dark:bg-green-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md"
    >
      {title} <BiLogoWhatsapp className="text-2xl" />
    </button>
  );
};

const CallButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-dark bg-gray-300 dark:bg-slate-700 dark:text-slate-100 mt-2 py-2 px-3 rounded-md"
    >
      {title} <BiPhoneCall className="text-2xl" />
    </button>
  );
};

export default CategoryProducts;
