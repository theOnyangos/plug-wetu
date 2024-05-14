import React, { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import Navigation from "../../components/utils/Navigation";
import { useLocation } from "react-router-dom";
import RatingOverview from "../../components/rating/RatingOverview";
import ReviewsComponent from "../../components/rating/ReviewsComponent";
import ThemeChanger from "../../components/ThemeChanger";
import BottomDrawer from "../../components/utils/BottomDrawer";
import CreateRating from "../../components/rating/CreateRating";
import DynamicHelmet from "../../components/DynamicHelmet";
import { reviews } from "../../data/StaticData.mjs";

const ProductRating = () => {
  const isMobile = useScreenSize();
  const location = useLocation();
  const { state } = location;
  const reviewDrawerHeight = "100%";
  const [isReviewDrawerOpen, setReviewIsDrawerOpen] = useState(false);

  const handleToggleReviewDrawer = () => {
    setReviewIsDrawerOpen(!isReviewDrawerOpen);
  };

  return (
    <div className="pb-20">
      <DynamicHelmet
        title="Plug Wetu - Category Products."
        description="Plug-wetu is an innovative fusion dealer's application designed to streamline the showcasing process for dealers and enhance the shopping experience for clients."
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={state.details.title} />
      ) : (
        <Navigation />
      )}

      <section className="md:container md:mx-auto mt-5">
        <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
          {/* Rating Overview */}
          <div className="md:flex md:justify-start">
            <div className="md:w-[100%]">
              <RatingOverview
                ratingDistribution={state.details.ratingDistribution}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Review Messages */}
      <section className="md:container md:mx-auto">
        <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
          <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
            Customer Reviews
          </h1>

          <ReviewsComponent details={state.details} reviews={reviews} />
        </div>
      </section>

      {/* Theme Change */}
      <ThemeChanger />

      {isMobile && (
        <div className="fixed bottom-0 w-full bg-white dark:bg-dark shadow-md p-2 border-t dark:border-slate-700">
          <AddReviewButton
            title="Add Review"
            handleClick={handleToggleReviewDrawer}
          />
        </div>
      )}

      {/* Ratting Drawer */}
      <BottomDrawer
        isOpen={isReviewDrawerOpen}
        onClose={handleToggleReviewDrawer}
        height={reviewDrawerHeight}
      >
        <div className="h-full grid place-content-center overflow-y-scroll">
          {/* Search Results */}
          <CreateRating
            title={state.details.title}
            image={state.details.thumbnail}
          />
        </div>
      </BottomDrawer>
    </div>
  );
};

const AddReviewButton = ({ title, handleClick }) => {
  return (
    <div className="flex-1 flex justify-center items-center pb-2 pt-2">
      <button
        onClick={handleClick}
        className="btn bg-darken text-slate-100 px-5 py-3 rounded-md dark:bg-cyan-500 dark:text-slate-100 hover:bg-secondary hover:text-white flex items-center gap-2 w-full justify-center"
      >
        {title}
      </button>
    </div>
  );
};

export default ProductRating;
