import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageCarousel from "../../components/product/ImageCarousel";
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
import { Toaster } from "react-hot-toast";
import useToastTheme from "../../hooks/useToastTheme";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import { useCart } from "../../store/useCart";
import { reviews } from "../../data/StaticData";
import ProductSkeleton from "../../components/products/ProductSkeleton";
import RatingOverview from "../../components/rating/RatingOverview";
import ReviewsComponent from "../../components/rating/ReviewsComponent";

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { showToast } = useToastTheme();
  const isMobile = useScreenSize();
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { state } = location;

  const {
    addToCart,
    isInCart,
    updateCartItemQuantity,
    checkMaxQuantityExceeded,
  } = useCart();

  const addItemToCart = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    if (state) {
      setProductDetails(state.recent);
      setLoading(false);
    }
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

  const handleAddToCart = () => {
    if (!selectedColor) {
      showToast(
        "error",
        'Please select a color for the product: "' +
          productDetails.title.toLowerCase() +
          '"'
      );
      return;
    }

    if (!selectedSize) {
      showToast(
        "error",
        'Please select a size for the product: "' +
          productDetails.title.toLowerCase() +
          '"'
      );
      return;
    }

    const item = {
      id: productDetails.id,
      title: productDetails.title,
      slug: productDetails.slug,
      price: productDetails.discount_price,
      discount: productDetails.price,
      image: productDetails.thumbnail,
      color: selectedColor,
      size: selectedSize,
      maxQuantity: productDetails.maxQuantity,
      quantity: quantity,
    };

    if (isInCart(item)) {
      if (checkMaxQuantityExceeded(item.id, item.maxQuantity)) {
        showToast(
          "error",
          "You have reached the maximum quantity you can add to cart for this product"
        );
        return;
      }
      updateCartItemQuantity(item.id, quantity);
      showToast("success", "Item updated in cart");
    } else {
      addItemToCart(item);
      showToast("success", "Item added to cart");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <DynamicHelmet
        title={`PLUG-WETU - ${productDetails.title}`}
        description={`${productDetails.short_description}`}
        seoImage={productDetails.image}
        seoTitle={productDetails.title}
        seoDescription={productDetails.short_description}
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"Product Details"} />
      ) : (
        <Navigation />
      )}

      {!loading && (
        <div className="mb-[90px]">
          {/* Breadcrumb */}
          <section className="container mx-auto">
            <div className="flex gap-2 my-3 md:my-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Home <BiChevronRight className="text-xl inline" />{" "}
                {productDetails.category}{" "}
                <BiChevronRight className="text-xl inline" />{" "}
                {productDetails.title}{" "}
              </p>
            </div>
          </section>

          <section className="md:container md:mx-auto mb-5">
            {/* Product Details */}
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

          {/* Product Details */}
          <section className="md:container md:mx-auto">
            <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
              <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
                Product Details
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 leading-tight">
                {productDetails.long_description}
              </p>
            </div>
          </section>

          {/* Product Reviews Overview */}
          <section className="md:container md:mx-auto">
            <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm">
              <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
                Rating Overview
              </h1>

              {/* Rating Overview */}
              <div className="md:flex md:justify-start">
                <div className="md:w-[100%]">
                  <RatingOverview
                    ratingDistribution={productDetails.ratingDistribution}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Review Messages */}
          <section className="md:container md:mx-auto">
            <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
              <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
                Reviews
              </h1>

              <ReviewsComponent details={productDetails} reviews={reviews} />
            </div>
          </section>
        </div>
      )}

      {/* Skeleton loader */}
      {loading && <ProductSkeleton />}

      {/* Handle Toast Notification */}
      <Toaster />

      {/* Add to cart */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark p-3 shadow-lg border-t dark:border-slate-700">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
                <BiHome className="text-2xl" />
              </button>
              <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
                <BiHeart className="text-2xl" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-3 flex justify-center items-center rounded-md"
            >
              <BiCartAdd className="text-xl mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Theme Changer */}
      <ThemeChanger />
    </>
  );
};

export default ProductDetail;
