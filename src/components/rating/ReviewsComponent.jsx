import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  ReviewItem,
  SeeAllReviewsButton,
  LoadMoreReviewsButton,
} from "@/components";

const ReviewsComponent = ({ reviews, productDetails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [isReview, setIsReview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadMoreButtonTitle, setLoadMoreButtonTitle] = useState("Load More");

  useEffect(() => {
    const pathSegments = pathname.split("/");
    if (pathSegments.includes("product-rating")) {
      setIsReview(true);
    }

    return () => {
      setIsReview(false);
    };
  }, [pathname]);

  const handleLoadMoreReviews = () => {
    setLoading(true);
    setLoadMoreButtonTitle("Loading...");
    setTimeout(() => {
      setLoading(false);
      setLoadMoreButtonTitle("Load More");
    }, 2000);
  };

  return (
    <div className="">
      {/* Review Message */}
      {reviews?.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}

      {/* Loading Indicator */}
      {loading && <div className="loading-indicator">Loading...</div>}

      {/* See all Reviews button */}
      {isReview ? (
        <LoadMoreReviewsButton
          title={loadMoreButtonTitle}
          handleClick={handleLoadMoreReviews}
          disabled={loading} // Disable button when loading
        />
      ) : (
        <SeeAllReviewsButton
          title={"See all Reviews"}
          handleClick={() => {
            navigate(`/product-rating/${productDetails.id}`);
          }}
        />
      )}

      <Toaster />
    </div>
  );
};

ReviewsComponent.propTypes = {
  reviews: PropTypes.array,
  productDetails: PropTypes.object,
};

export default ReviewsComponent;
