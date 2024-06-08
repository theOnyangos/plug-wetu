import PropTypes from "prop-types";
import { BiCartAdd, BiHeart, BiHome } from "react-icons/bi";

const MobileCartActionButtons = ({ handleAddToCart }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark p-3 shadow-lg border-t dark:border-slate-700">
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
            <BiHome className="text-2xl" />
          </button>
          <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
            <BiHeart className="text-2xl" />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-3 flex justify-center items-center rounded-md"
        >
          <BiCartAdd className="text-xl mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

MobileCartActionButtons.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default MobileCartActionButtons;
