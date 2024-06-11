import PropTypes from "prop-types";
import { BiCartAdd } from "react-icons/bi";

const AddToCartButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-darken text-sm font-bold text-white dark:bg-cyan-500 dark:text-slate-100 py-2 px-5 rounded-md mt-2 flex gap-3 items-center"
    >
      {title} <BiCartAdd className="text-2xl md:hidden" />
    </button>
  );
};

AddToCartButton.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

export default AddToCartButton;
