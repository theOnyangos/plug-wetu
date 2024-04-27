import React from "react";
import CategoriesCarousel from "./CategoriesCarousel";
import { useMediaQuery } from "react-responsive";

const CategoryScroll = ({ categoryData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  let deviceType = "desktop";
  if (isMobile) {
    deviceType = "mobile";
  } else if (isTablet) {
    deviceType = "tablet";
  }

//   console.log(deviceType)

  return (
    <CategoriesCarousel
      items={categoryData}
      responsive={responsive}
      deviceType={deviceType}
    />
  );
};

export default CategoryScroll;
