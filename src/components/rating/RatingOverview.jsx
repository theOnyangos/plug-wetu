import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BiSolidStar, BiStar } from "react-icons/bi";
import useThemeStore from "../../store/UseThemeStore";

const RatingOverview = () => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  return (
    <div className="flex gap-5 pb-3 justify-center items-center w-full">
      {/* Rating Overview */}
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <div className="flex gap-2 items-center justify-center p-2 px-5 bg-gray-100 dark:bg-darken rounded-full">
            <BiSolidStar className="text-[#fecc48] text-2xl" />
            <BiSolidStar className="text-[#fecc48] text-2xl" />
            <BiSolidStar className="text-[#fecc48] text-2xl" />
            <BiSolidStar className="text-[#fecc48] text-2xl" />
            <BiSolidStar className="text-[#fecc48] text-2xl" />
            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-sm font-semibold dark:text-slate-200">4.5</h1>
              <p className="text-xs text-gray-500 dark:text-slate-200">
                out of
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-200">5</p>
            </div>
          </div>
        </div>

        {/* Total Reviews */}
        <div className="flex justify-center items-center mt-2">
          <p className="text-xs text-gray-500 dark:text-slate-200">
            1000 Reviews
          </p>
        </div>

        <div className="mt-5">
          {/* Five Star  */}
          <div className="flex gap-2 justify-center items-center mb-1">
            <h1 className="text-sm font-normal dark:text-slate-200">5 Stars</h1>
            <div className="flex-1 max-w-[75%]">
              <ProgressBar
                completed={80}
                bgColor="#fecc48"
                height="13px"
                borderRadius="8px"
                isLabelVisible={false}
                baseBgColor={`${isDarkMode ? "#111827" : "#e0e0e0"}`}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-200 w-[25px]">
              80%
            </p>
          </div>

          {/* Four Star */}
          <div className="flex gap-2 justify-center items-center mb-1">
            <h1 className="text-sm font-normal dark:text-slate-200">4 Stars</h1>
            <div className="flex-1 max-w-[75%]">
              <ProgressBar
                completed={65}
                bgColor="#fecc48"
                height="13px"
                borderRadius="8px"
                isLabelVisible={false}
                baseBgColor={`${isDarkMode ? "#111827" : "#e0e0e0"}`}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-200">65%</p>
          </div>

          {/* Three Star */}
          <div className="flex gap-2 justify-center items-center mb-1">
            <h1 className="text-sm font-normal dark:text-slate-200">3 Stars</h1>
            <div className="flex-1 max-w-[75%]">
              <ProgressBar
                completed={50}
                bgColor="#fecc48"
                height="13px"
                borderRadius="8px"
                isLabelVisible={false}
                baseBgColor={`${isDarkMode ? "#111827" : "#e0e0e0"}`}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-200">50%</p>
          </div>

          {/* Two Star */}
          <div className="flex gap-2 justify-center items-center mb-1">
            <h1 className="text-sm font-normal dark:text-slate-200">2 Stars</h1>
            <div className="flex-1 max-w-[75%]">
              <ProgressBar
                completed={10}
                bgColor="#fecc48"
                height="13px"
                borderRadius="8px"
                isLabelVisible={false}
                baseBgColor={`${isDarkMode ? "#111827" : "#e0e0e0"}`}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-200">10%</p>
          </div>

          {/* One Star */}
          <div className="flex gap-2 justify-center items-center mb-1">
            <h1 className="text-sm font-normal dark:text-slate-200">1 Stars</h1>
            <div className="flex-1 max-w-[75%]">
              <ProgressBar
                completed={1}
                bgColor="#fecc48"
                height="13px"
                borderRadius="8px"
                isLabelVisible={false}
                baseBgColor={`${isDarkMode ? "#111827" : "#e0e0e0"}`}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-200">1%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingOverview;
