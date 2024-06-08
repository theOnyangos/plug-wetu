import PropTypes from "prop-types";
import { BiLogoWhatsapp } from "react-icons/bi";

const WhatsappButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-dark bg-gray-300 dark:bg-green-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md"
    >
      <BiLogoWhatsapp className="text-2xl" />
    </button>
  );
};

WhatsappButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default WhatsappButton;
