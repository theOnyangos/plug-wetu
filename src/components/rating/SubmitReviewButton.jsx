import PropTypes from "prop-types";

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

SubmitReviewButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

export default SubmitReviewButton;
