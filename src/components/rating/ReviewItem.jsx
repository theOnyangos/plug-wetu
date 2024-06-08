import { useState } from "react";
import PropTypes from "prop-types";
import useTimeAgo from "@/hooks/useTimeAgo";
import { BiSolidStar, BiStar } from "react-icons/bi";
import { HandleLikeButton, HandleDislikeButton } from "@/components";
import toast from "react-hot-toast";

const ReviewItem = ({ review }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likeReview, setLikeReview] = useState(false);
  const [disLikeReview, setDisLikeReview] = useState(false);
  const { timeAgo } = useTimeAgo();

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

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review?.rating) {
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

  /**
   * TODO:
   * - Create a function that will handle the dislike review
   * - Make sure the user can only dislike the review once
   * - On dislike, check if the user had liked the review and remove the like
   * - Do the same for the like function
   * - Update the UI if the user had liked or disliked a review
   */
  return (
    <div className="border-b dark:border-slate-700 pb-3 mb-3">
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
              {renderStars()}
              <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                {review.rating} out of 5
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
          {review.message}
        </p>
      </div>

      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-sm md:text-base font-semibold dark:text-cyan-500">
          {review.name}
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          {timeAgo(review.datetime)}
        </p>
      </div>
    </div>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object,
};

export default ReviewItem;
