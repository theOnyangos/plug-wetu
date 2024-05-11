import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageCarousel from "../../components/product/ImageCarousel";
import ScrollableComponent from "../../components/utils/ScrollableComponent";
import DynamicHelmet from "../../components/DynamicHelmet";
import Navigation from "../../components/utils/Navigation";
import ThemeChanger from "../../components/ThemeChanger";
import {
  BiStar,
  BiHeart,
  BiHome,
  BiCartAdd,
  BiSolidStar,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoTelegram,
  BiLogoWhatsapp,
  BiLogoInstagram,
  BiSolidStarHalf,
  BiChevronRight,
} from "react-icons/bi";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import useToastTheme from "../../hooks/useToastTheme";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { toasterTheme } = useToastTheme();
  const isMobile = useScreenSize();

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      setProductDetails(state.recent);
    }
    // console.log(productDetails);
  }, [state, productDetails]);

  const handleSelectColor = (event) => {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
  };

  const handleSelectSize = (event) => {
    const selectedValue = event.target.value;
    setSelectedSize(selectedValue);
  };

  const increaseQuantity = () => {
    if (quantity > productDetails.maxQuantity) {
      toast.error(
        "You have reached the maximum quantity for this product",
        toasterTheme()
      );
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      toast.error(`You cannot have less than 1 quantity`, toasterTheme());
      return;
    }

    setQuantity(quantity - 1);
  };

  return (
    <ScrollableComponent>
      <DynamicHelmet
        title={`PLUG-WETU - ${productDetails.title}`}
        description={`${productDetails.short_description}`}
        seoImage={productDetails.image}
        seoTitle={productDetails.title}
        seoDescription={productDetails.short_description}
      />

      {/* Navigation */}
      {isMobile ? <MobileDetailsNavigation /> : <Navigation />}

      {/* Breadcrumb */}
      <section className="container mx-auto">
        <div className="flex gap-2 my-3 md:my-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Home <BiChevronRight className="text-xl inline" />{" "}
            {productDetails.category} <BiChevronRight className="text-xl inline" />{" "}
            {productDetails.title}
          </p>
        </div>
      </section>

      <section className="container mx-auto">
        {/* Product Details */}
        <div className="bg-white dark:bg-dark p-3 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5 mb-[80px]">
          {/* Image Preview */}
          <ImageCarousel productDetails={productDetails} />

          {/* Product Description */}
          <div className="mt-5">
            <h1 className="text-lg leading-none md:text-2xl font-semibold dark:text-slate-200 mb-2 md:mb-3 tracking-tighter">
              {productDetails.title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 leading-tight">
              {productDetails.long_description}
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
                    <button className="btn text-white bg-secondary dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-1/2 py-2 flex justify-center items-center rounded-md">
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
                <div className="flex gap-3 items-center mt-5 md:mt-10 border-t border-gray-300 pt-3">
                  <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                    Share on:
                  </p>

                  {/* Socials */}
                  <div className="flex gap-2 md:gap-3 items-center">
                    <button className="btn bg-primary dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full">
                      <BiLogoFacebook className="text-white text-xl md:text-3xl" />
                    </button>
                    <button className="btn bg-secondary dark:bg-secondary dark:text-white hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 flex justify-center items-center rounded-full">
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

      <Toaster />

      {/* Add to cart */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark p-3 shadow-lg">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
                <BiHome className="text-lg" />
              </button>
              <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
                <BiHeart className="text-lg" />
              </button>
            </div>
            <button className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-2 flex justify-center items-center rounded-md">
              <BiCartAdd className="text-xl mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Theme Changer */}
      <ThemeChanger />
    </ScrollableComponent>
  );
};

export default ProductDetail;
