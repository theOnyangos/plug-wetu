import PropTypes from "prop-types";

const ViewCartSummaryButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-3 flex justify-center items-center rounded-md"
    >
      {title}
    </button>
  );
};

ViewCartSummaryButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ViewCartSummaryButton;
