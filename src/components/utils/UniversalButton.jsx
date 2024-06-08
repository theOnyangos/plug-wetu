import PropTypes from "prop-types";

const UniversalButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn bg-secondary hover:text-slate-100 text-slate-100 dark:bg-white dark:text-secondary hover:bg-primary hover:border-secondary py-2 px-8 rounded-[50px] cursor-pointer transition ease-in-out delay-150"
    >
      <p className="text-[18px] font-normal tracking-tighter">{title}</p>
    </button>
  );
};

UniversalButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default UniversalButton;
