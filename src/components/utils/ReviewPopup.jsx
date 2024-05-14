import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidStar, BiStar, BiX } from "react-icons/bi";
import useTimeAgo from "../../hooks/useTimeAgo.mjs";
import useScreenSize from "../../hooks/useScreenSize.mjs";

const ReviewPopup = ({ reviews }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const { timeAgo } = useTimeAgo();
  const isMobile = useScreenSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000);

    const clearTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(clearTimer);
    };
  }, [currentReviewIndex, reviews]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed ${
            isMobile ? "bottom-20" : "bottom-20 left-5"
          } bg-white p-4 border shadow-lg rounded-lg border-slate-300 dark:border-slate-700 dark:bg-dark mx-2 md:max-w-[400px] md:mx-auto md:bottom-5 z-20`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <div className="content relative w-full">
            <PopupItem
              name={reviews[currentReviewIndex].name}
              message={reviews[currentReviewIndex].message}
              time={timeAgo(reviews[currentReviewIndex].datetime)}
              title={reviews[currentReviewIndex].productName}
              rating={reviews[currentReviewIndex].rating}
            />

            <button
              onClick={handleClose}
              className="absolute top-0 right-0 mt-2 bg-transparent text-dark dark:text-slate-100 rounded"
            >
              <BiX className="text-3xl" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PopupItem = ({ name, message, time, title, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <BiSolidStar
            key={i}
            className="text-orange-500 dark:text-yellow-500"
          />
        );
      } else {
        stars.push(
          <BiStar key={i} className="text-gray-400 dark:text-gray-500" />
        );
      }
    }
    return stars;
  };

  return (
    <>
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center mb-3">
          {/* User profile Image */}
          <div className="flex gap-3 items-center">
            <div className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-gray-200 dark:bg-slate-700">
              <img src="/images/profile-avatar.png" alt="User Avatar" />
            </div>
          </div>

          {/* User Ratings & Verification Badge */}
          <div className="flex flex-col gap-2 md:gap-0 items-start">
            <div className="flex">
              {renderStars(rating)}
              <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                {rating} out of 5
              </p>
            </div>

            <p className="text-xs md:text-sm font-normal text-green-500 dark:text-green-400 leading-none">
              Verified Buyer
            </p>
          </div>
        </div>

        {/* Placeholder */}
        <div className=""></div>
      </div>

      <div className="mb-3 border-b dark:border-slate-700 pb-3">
        <h1 className="text-md text-darken font-semibold dark:text-cyan-500 mb-1">
          {title}
        </h1>
        <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
          {message}
        </p>
      </div>

      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-sm md:text-base font-semibold dark:text-slate-100">
          {name}
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          {time}
        </p>
      </div>
    </>
  );
};

export default ReviewPopup;
