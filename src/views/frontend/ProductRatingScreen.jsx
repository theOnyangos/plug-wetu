import { useContext, useEffect, useState } from "react";
import {
  Navigation,
  CreateRating,
  BottomDrawer,
  ThemeChanger,
  DynamicHelmet,
  ReviewMessages,
  RatingComponent,
  MobileDetailsNavigation,
} from "@/components";
import useScreenSize from "@/hooks/useScreenSize";
import { ProductDetailsContext } from "@/context/ProductDetailsContext.jsx";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProductRatingScreen = () => {
  const { productDetails, getUrlSlug, getReviews } = useContext(
    ProductDetailsContext
  );
  const isMobile = useScreenSize();
  const reviewDrawerHeight = "100%";
  const [isReviewDrawerOpen, setReviewIsDrawerOpen] = useState(false);
  const location = useLocation();
  const slug = getUrlSlug(location.pathname);

  const handleToggleReviewDrawer = () => {
    setReviewIsDrawerOpen(!isReviewDrawerOpen);
  };

  const isNotEmptyObject = (obj) => {
    return (
      obj &&
      typeof obj === "object" &&
      !Array.isArray(obj) &&
      Object.entries(obj).length > 0
    );
  };

  useEffect(() => {
    // Check if the productDetails has data
    if (!isNotEmptyObject(productDetails)) {
      return window.history.back();
    }

    getReviews(slug);

    return () => {
      setReviewIsDrawerOpen(false);
    };
  }, [getReviews, slug, productDetails]); // Added `slug` to the dependency array

  return (
    <div className="pb-20">
      <DynamicHelmet
        title="Plug Wetu - Category Products."
        description="Plug-wetu is an innovative fusion dealer's application designed to streamline the showcasing process for dealers and enhance the shopping experience for clients."
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={productDetails?.title} />
      ) : (
        <Navigation />
      )}

      {/* Product Rating Overview */}
      <RatingComponent />

      {/* Review Messages */}
      <ReviewMessages />

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

      {/* Rating Drawer */}
      <BottomDrawer
        isOpen={isReviewDrawerOpen}
        onClose={handleToggleReviewDrawer}
        height={reviewDrawerHeight}
      >
        <div className="h-full grid place-content-center overflow-y-scroll">
          {/* Search Results */}
          <CreateRating
            title={productDetails?.title}
            image={productDetails?.thumbnail}
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

AddReviewButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductRatingScreen;
