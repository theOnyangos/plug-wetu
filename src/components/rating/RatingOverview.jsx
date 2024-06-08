import PropTypes from "prop-types";
import ProgressBar from "@ramonak/react-progress-bar";
import { BiSolidStar } from "react-icons/bi";
import useThemeStore from "@/store/UseThemeStore";

const RatingOverview = ({ ratingDistribution }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  const totalReviews = Object.values(ratingDistribution).reduce(
    (acc, curr) => acc + curr,
    0
  );

  let totalScore = 0;

  Object.entries(ratingDistribution).forEach(([stars, count]) => {
    totalScore += parseInt(stars) * count;
  });
  const averageRating = totalReviews > 0 ? totalScore / totalReviews : 0;

  return (
    <div className="flex gap-5 pb-3 justify-center items-center w-full">
      {/* Rating Overview */}
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <div className="flex gap-2 items-center justify-center p-2 px-5 bg-gray-100 dark:bg-darken rounded-full">
            {[...Array(5)].map((_, index) => (
              <BiSolidStar
                key={index}
                className={`text-[#fecc48] text-2xl ${
                  index < Math.floor(averageRating) ? "" : "opacity-30"
                }`}
              />
            ))}

            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-sm font-semibold dark:text-slate-200">
                {averageRating.toFixed(1)}
              </h1>
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
            {totalReviews} Reviews
          </p>
        </div>

        <div className="mt-5">
          {/* Render rating bars */}
          {Object.entries(ratingDistribution).map(([stars, count]) => (
            <div
              key={stars}
              className="flex gap-2 justify-center items-center mb-1"
            >
              <h1 className="text-sm font-normal dark:text-slate-200">
                {stars} Stars
              </h1>
              <div className="flex-1 max-w-[75%]">
                <ProgressBar
                  completed={(count / totalReviews) * 100}
                  bgColor="#fecc48"
                  height="13px"
                  borderRadius="8px"
                  isLabelVisible={false}
                  baseBgColor={`${isDarkMode ? "#111827" : "#e0e0e0"}`}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-200">
                {((count / totalReviews) * 100).toFixed()}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

RatingOverview.propTypes = {
  ratingDistribution: PropTypes.object,
};

export default RatingOverview;
