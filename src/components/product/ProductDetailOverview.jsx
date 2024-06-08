import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import {
  BiHeart,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiSolidStar,
  BiSolidStarHalf,
  BiStar,
} from "react-icons/bi";
import { motion } from "framer-motion";
import useToastTheme from "@/hooks/useToastTheme";
import useScreenSize from "@/hooks/useScreenSize";

const ProductDetailOverview = ({
  productDetails,
  showModal,
  toggleModal,
  handleSelectColor,
  selectedColor,
  selectedSize,
  handleSelectSize,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { showToast } = useToastTheme();
  const isMobile = useScreenSize();

  const increaseQuantity = () => {
    if (quantity > productDetails.maxQuantity) {
      showToast(
        "error",
        "You have reached the maximum quantity for this product"
      );
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      showToast("error", "You cannot have less than 1 quantity");
      return;
    }

    setQuantity(quantity - 1);
  };

  return (
    <section className="md:container md:mx-auto mb-5">
      <div className="bg-white dark:bg-dark p-3 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Image Preview */}
        <ImageCarousel
          productDetails={productDetails}
          showModal={showModal}
          toggleModal={toggleModal}
        />

        {/* Product Description */}
        <div className="mt-5">
          <h1 className="text-lg leading-none md:text-2xl font-semibold dark:text-slate-200 mb-2 md:mb-3 tracking-tighter">
            {productDetails.title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 leading-tight">
            {productDetails.short_description}
          </p>
          <div className="flex flex-col gap-2 mt-3">
            {/* Price & Discount */}
            <div className="flex gap-3 items-center">
              <p className="text-2xl font-semibold text-primary dark:text-slate-200 tracking-tight">
                KES {productDetails.discount_price}
              </p>
              <p className="text-lg font-normal text-gray-400 dark:text-gray-400 line-through tracking-tight">
                KES {productDetails.price}
              </p>
            </div>

            {/* Star Rating */}
            <div className="flex gap-2 items-center mb-5">
              <div className="flex gap-1 items-center">
                <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                <BiSolidStarHalf className="text-orange-500 dark:text-yellow-500" />
                <BiStar className="text-orange-500 dark:text-yellow-500" />
              </div>
              <span className="dark:text-gray-500 text-sm">(56)</span>
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              {/* Quantity */}
              <div className="flex gap-3 items-center">
                <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                  Quantity:
                </p>

                {/* Quantity Buttons */}
                <div className="flex gap-3 items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                  >
                    -
                  </button>
                  <span className="text-sm md:text-lg font-semibold text-primary dark:text-slate-200">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Color */}
              <div className="flex gap-3 items-center">
                <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                  Color:
                </p>

                {/* Color Buttons */}
                <div className="flex gap-2 md:gap-3 items-center">
                  {productDetails.colors?.map((color) => (
                    <motion.label
                      whileHover={{ scale: 1.1 }}
                      key={color.id}
                      style={{ backgroundColor: color.code }}
                      className={`btn w-8 md:w-10 h-8 md:h-10 rounded-full cursor-pointer shadow-md border`}
                    >
                      <input
                        type="radio"
                        value={color.name}
                        checked={selectedColor == color.name}
                        onChange={handleSelectColor}
                        className="hidden"
                      />
                    </motion.label>
                  ))}
                </div>

                {/* User Selected color */}
                <div className="flex items-center gap-3">
                  <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                    {selectedColor && <span>{selectedColor}</span>}
                  </p>
                </div>
              </div>

              {/* Size */}
              <div className="flex gap-3 items-center">
                <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                  Size:
                </p>

                {/* Size Buttons */}
                <div className="flex gap-2 md:gap-3 items-center">
                  {productDetails.sizes?.map((size) => (
                    <motion.label
                      whileHover={{ scale: 1.1 }}
                      key={size.id}
                      className={`btn  ${
                        selectedSize == size.name
                          ? "bg-secondary text-slate-100 dark:bg-primary dark:text-white"
                          : "bg-slate-200 dark:bg-slate-200 dark:text-darken hover:bg-secondary hover:text-white dark:hover:text-darken"
                      } text-sm md:text-base w-10 h-10 rounded-full cursor-pointer flex justify-center items-center`}
                    >
                      {size.name}
                      <input
                        type="radio"
                        value={size.name}
                        checked={selectedSize == size.name}
                        onChange={handleSelectSize}
                        className="hidden"
                      />
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Add to Cart & Buy Now Buttons */}
              {!isMobile && (
                <div className="flex gap-3 items-center">
                  <button
                    onClick={handleAddToCart}
                    className="btn text-white bg-secondary dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-1/2 py-2 flex justify-center items-center rounded-md"
                  >
                    Add to Cart
                  </button>

                  <button className="btn text-darken bg-slate-200 hover:bg-slate-400 hover:text-white w-1/2 py-2 flex justify-center items-center rounded-md">
                    Buy Now
                  </button>
                </div>
              )}

              {/* Wishlist */}
              {!isMobile && (
                <div className="flex items-center gap-3">
                  <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                    Wishlist:
                  </p>

                  {/* Wishlist */}
                  <button className="btn bg-slate-200 text-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
                    <BiHeart className="text-sm md:text-lg" />
                  </button>
                </div>
              )}

              {/* Share on socials */}
              <div className="flex gap-3 items-center mt-10 border-t dark:border-slate-700 pt-3">
                <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                  Share on:
                </p>

                {/* Socials */}
                <div className="flex gap-2 md:gap-3 items-center">
                  <button className="btn bg-primary dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full">
                    <BiLogoFacebook className="text-white text-xl md:text-3xl" />
                  </button>
                  <button className="btn bg-secondary dark:bg-sky-500 dark:text-white hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full">
                    <BiLogoTwitter className="text-white text-xl md:text-3xl" />
                  </button>
                  <button className="btn bg-pink-600 dark:bg-pink-600 dark:text-white hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full">
                    <BiLogoInstagram className="text-white text-xl md:text-3xl" />
                  </button>
                  <button className="btn bg-green-500 dark:bg-green-500 dark:text-white hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full">
                    <BiLogoWhatsapp className="text-white text-xl md:text-3xl" />
                  </button>
                  <button className="btn bg-sky-600 dark:bg-sky-600 dark:text-white hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full">
                    <BiLogoTelegram className="text-white text-xl md:text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailOverview;
