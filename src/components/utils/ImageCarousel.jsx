import PropTypes from "prop-types";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageCarousel({ images }) {
  const options = {
    wrapAround: true,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    autoPlay: true,
    pageDots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Flickity
      options={options}
      elementType={"div"}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className="md:h-[400px] md:w-[60%] object-cover rounded-lg mr-5"
        />
      ))}
    </Flickity>
  );
}

// Custom previous arrow component
const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-prev-arrow" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

// Custom next arrow component
const CustomNextArrow = ({ onClick }) => (
  <button className="custom-next-arrow" onClick={onClick}>
    <FaChevronRight />
  </button>
);

ImageCarousel.propTypes = {
  images: PropTypes.array,
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default ImageCarousel;
