import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const ImageCarousel = ({ productDetails }) => {
  if (
    !productDetails ||
    !productDetails.images ||
    !Array.isArray(productDetails.images)
  ) {
    return null;
  }

  const properties = {
    prevArrow: (
      <button className="p-3 bg-primary/50 rounded-full">
        <FaCircleArrowLeft className="text-white text-2xl" />
      </button>
    ),
    nextArrow: (
      <button className="p-3 bg-primary/50 rounded-full">
        <FaCircleArrowRight className="text-white text-2xl" />
      </button>
    ),
    indicators: (currentIndex) => {
      return (
        <div className="indicator">
          <img
            src={productDetails.images[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      );
    },
  };

  return (
    <Slide {...properties}>
      {productDetails.images.map((image, index) => (
        <div key={index} className="slide-container">
          <Image images={image.url} />
        </div>
      ))}
    </Slide>
  );
};

const Image = ({ images }) => {
  return (
    <div className="each-slide-effect">
      <div style={{ backgroundImage: `url(${images})` }}></div>
    </div>
  );
};

export default ImageCarousel;
