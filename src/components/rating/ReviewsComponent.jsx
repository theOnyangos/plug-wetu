import React, { useEffect, useState } from "react";
import {
  BiDislike,
  BiLike,
  BiSolidDislike,
  BiSolidLike,
  BiSolidStar,
} from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useToastTheme from "../../hooks/useToastTheme";

const ReviewsComponent = ({ details }) => {
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
    <div className="flex flex-col gap-3">
      {/* Review Message */}
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />

      {/* See all Reviews button */}
      {isReview ? (
        <LoadMoreReviewsButton
          title={loadMoreButtonTitle}
          handleClick={handleLoadMoreReviews}
        />
      ) : (
        <SeeAllReviewsButton
          title={"See all Reviews"}
          handleClick={() => {
            navigate(`/product-rating/${details.id}`, { state: { details } });
          }}
        />
      )}

      <Toaster />
    </div>
  );
};

const ReviewItem = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likeReview, setLikeReview] = useState(false);
  const [disLikeReview, setDisLikeReview] = useState(false);
  const { toasterTheme } = useToastTheme();

  const handleLikeReview = () => {
    // Set the like review to true and dislike review to false
    setLikeReview(true);
    setDisLikeReview(false);

    // Update the likes and dislikes count
    setLikes((prev) => (prev += 1));
    setDislikes((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });

    // Display the toast notification
    toast.success("You liked this review", {
      icon: "👍",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleDislikeReview = () => {
    // Set the dislike review to true and like review to false
    setDisLikeReview(true);
    setLikeReview(false);

    // Update the likes and dislikes count
    setLikes((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
    setDislikes((prev) => (prev += 1));

    // Display the toast notification
    toast.error("You disliked this review", {
      icon: "👎",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  /**
   * TODO:
   * - Create a function that will handle the dislike review
   * - Make sure the user can only dislike the review once
   * - On dislike, check if the user had liked the review and remove the like
   * - Do the same for the like function
   * - Update the UI if the user had liked or disliked a review
   */
  return (
    <div className="border-b dark:border-slate-700 pb-3">
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
              <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
              <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
              <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
              <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
              <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
              <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                5/5
              </p>
            </div>

            <p className="text-xs md:text-sm font-normal text-green-500 dark:text-green-400 leading-none">
              Verified Buyer
            </p>
          </div>
        </div>

        {/* Like & Dislike Buttons */}
        <div className="flex items-center">
          <HandleLikeButton
            isLiked={likeReview}
            title={likes}
            handleClick={handleLikeReview}
          />
          <HandleDislikeButton
            isDisLiked={disLikeReview}
            title={dislikes}
            handleClick={handleDislikeReview}
          />
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
          I love this product, it's amazing, elegance with our Contemporary
          Fusion Wall Art. Each piece is a masterful blend of diverse artistic
          influences, resulting in a captivating composition that effortlessly
          enhances any room. Elevate your home decor with this stunning fusion
          artwork and make a bold statement that reflects your unique sense of
          style.
        </p>
      </div>

      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-sm md:text-base font-semibold dark:text-cyan-500">
          Emmaculate Onyango
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          2 days ago
        </p>
      </div>
    </div>
  );
};

const LoadMoreReviewsButton = ({ title, handleClick }) => {
  return (
    <div className="flex-1 flex justify-center items-center pb-2 pt-2">
      <button
        onClick={handleClick}
        className="btn bg-slate-100 text-darken px-5 py-2 rounded-md dark:bg-slate-100 dark:text-dark hover:bg-secondary hover:text-white"
      >
        {title}
      </button>
    </div>
  );
};

const SeeAllReviewsButton = ({ title, handleClick }) => {
  return (
    <div className="flex-1 flex justify-center items-center pb-2 pt-2">
      <button
        onClick={handleClick}
        className="btn bg-slate-100 text-darken px-5 py-2 rounded-md dark:bg-slate-100 dark:text-dark hover:bg-secondary hover:text-white"
      >
        {title}
      </button>
    </div>
  );
};

const HandleLikeButton = ({ isLiked, title, handleClick }) => {
  return (
    <div className="bg-slate-200 py-2 pl-5 pr-3 rounded-l-full dark:bg-darken dark:text-slate-100">
      <button
        onClick={handleClick}
        className="btn text-darken dark:text-slate-100 flex gap-2 items-center"
      >
        {isLiked ? <BiSolidLike /> : <BiLike />}
        <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400">
          {title}
        </p>
      </button>
    </div>
  );
};

const HandleDislikeButton = ({ isDisLiked, title, handleClick }) => {
  return (
    <div className="bg-slate-200 py-2 pr-5 pl-2 rounded-r-full dark:bg-darken dark:text-slate-100 border-l border-slate-300 dark:border-slate-700">
      <button
        onClick={handleClick}
        className="btn text-darken dark:text-slate-100 flex gap-2 items-center"
      >
        {isDisLiked ? <BiSolidDislike /> : <BiDislike />}
        <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400">
          {title}
        </p>
      </button>
    </div>
  );
};

export default ReviewsComponent;
