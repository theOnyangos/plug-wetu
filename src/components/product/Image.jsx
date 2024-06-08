import PropTypes from "prop-types";

const Image = ({ images }) => {
  return (
    <div className="each-slide-effect">
      <div style={{ backgroundImage: `url(${images})` }}></div>
    </div>
  );
};

Image.propTypes = {
  images: PropTypes.string.isRequired,
};

export default Image;
