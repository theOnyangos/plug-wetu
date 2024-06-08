import PropTypes from "prop-types";
import { BiHeart } from "react-icons/bi";

const WishlistButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md"
    >
      <BiHeart className="text-2xl" />
    </button>
  );
};

WishlistButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default WishlistButton;
