import PropTypes from "prop-types";
import { BiPhoneCall } from "react-icons/bi";

const CallButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-dark bg-gray-300 dark:bg-slate-700 dark:text-slate-100 mt-2 py-2 px-3 rounded-md"
    >
      <BiPhoneCall className="text-2xl" />
    </button>
  );
};

CallButton.propTypes = {
  handleClick: PropTypes.func,
};

export default CallButton;
