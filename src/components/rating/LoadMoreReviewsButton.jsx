import PropTypes from "prop-types";

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

LoadMoreReviewsButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default LoadMoreReviewsButton;
