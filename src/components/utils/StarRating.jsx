import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import useThemeStore from "../../store/UseThemeStore";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);
  const [showTitle, setShowTitle] = useState("Select your rating");
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const titles = ["Terrible", "Bad", "Average", "Good", "Excellent"];

  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  const themeColor = isDarkMode ? "#111827" : "#e4e5e9";

  const handleSelected = (e) => {
    setRating(parseInt(e.target.value));
  };

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={handleSelected}
                className="hidden"
              />
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaStar
                  className="cursor-pointer"
                  size={40}
                  onMouseEnter={() => {
                    setHover(currentRating);
                    setShowTitle(titles[currentRating - 1]);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                    setShowTitle("Select your rating");
                  }}
                  color={
                    currentRating <= (hover || rating) ? "#fecc48" : themeColor
                  }
                />
              </motion.div>
            </label>
          );
        })}
      </div>

      {/* Show selected Rating */}
      <div className="flex justify-center items-center mt-3">
        <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
          {(rating && titles[rating - 1]) || showTitle}
        </p>
      </div>
    </>
  );
};

export default StarRating;
