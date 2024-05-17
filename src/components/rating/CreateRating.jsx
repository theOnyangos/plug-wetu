import React, { useState } from "react";
import StarRating from "../utils/StarRating";
import NewMessageInput from "../utils/MessageInput";
import useToastTheme from "../../hooks/useToastTheme";
import thumbsUp from "../../assets/lotti-files/thumbs_up.json";
import AnimationModal from "../../components/utils/AnimationModal";
import Lottie from "lottie-react";

const CreateRating = ({ title, image }) => {
  const [rating, setRating] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToastTheme();
  const [showModal, setShowModal] = useState(false);

  const toggleShowModel = () => {
    setShowModal(!showModal);
  };

  const onSendClick = (e) => {
    e.preventDefault();

    setShowModal(true);

    if (newMessage.trim() === "") {
      showToast("error", "Please provide your name and review message.");
      return;
    }

    const formData = new FormData();
    formData.append("message", newMessage);
  };

  return (
    <div className="">
      {/* Rating Image */}
      <div className="flex justify-center items-center">
        <img src={image ?? "/images/empty-rev.png"} alt="Rating Image" />
      </div>

      {/* Rating Title */}
      <div className="flex flex-col justify-center items-center my-5">
        <h1 className="text-xl text-primary font-semibold dark:text-cyan-500">
          Please Rate this product!
        </h1>
        <p className="text-gray-500 text-sm dark:text-slate-200">{title}</p>
      </div>

      <form className="px-3 pb-10 md:p-0" action="" method="post">
        {/* Rating Component */}
        <div className="">
          <StarRating rating={rating} setRating={setRating} />
        </div>

        <div className="w-full mb-3">
          <label
            htmlFor="name"
            className="text-sm block font-normal text-dark dark:text-gray-400"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="border dark:border-slate-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="review"
            className="text-sm block font-normal text-dark dark:text-gray-400"
          >
            Your Review
          </label>
          <NewMessageInput
            value={newMessage}
            onChange={(ev) => setNewMessage(ev.target.value)}
            onSend={onSendClick}
          />
        </div>
        <div className="flex justify-center">
          <SubmitReviewButton
            title={"Submit Review"}
            handleClick={onSendClick}
          />
        </div>
      </form>

      {showModal && (
        <AnimationModal onClose={toggleShowModel}>
          <div className="text-center">
            <Lottie animationData={thumbsUp} />
              <h1 className="text-xl text-primary font-semibold dark:text-cyan-500 leading-none mb-3">
                Thank you for your review!
              </h1>
              <p className="text-white text-sm dark:text-slate-200 mb-3">
                Your review has been submitted successfully.
              </p>
              {/* Ok Button */}
              <div className="flex justify-center items-center pb-2 pt-2">
                <button
                  onClick={toggleShowModel}
                  className="btn bg-darken font-bold text-slate-100 px-5 py-3 rounded-md dark:bg-primary dark:text-slate-100 hover:bg-secondary hover:text-white flex items-center gap-2 w-full justify-center"
                >
                  Ok
                </button>
            </div>
          </div>
        </AnimationModal>
      )}
    </div>
  );
};

const SubmitReviewButton = ({ title, handleClick }) => {
  return (
    <div className="flex-1 flex justify-center items-center pb-2 pt-2">
      <button
        type="submit"
        onClick={handleClick}
        className="btn bg-darken text-slate-100 px-5 py-3 rounded-md dark:bg-primary dark:text-slate-100 hover:bg-secondary hover:text-white flex items-center gap-2 w-full justify-center"
      >
        {title}
      </button>
    </div>
  );
};

export default CreateRating;
