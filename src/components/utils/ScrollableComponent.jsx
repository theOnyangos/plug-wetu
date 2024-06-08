import { useEffect } from "react";
import PropTypes from "prop-types";

function ScrollableComponent({ children }) {
  useEffect(() => {
    const scrollPosition = JSON.parse(localStorage.getItem("scrollPosition"));

    if (scrollPosition) {
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }

    const handleScroll = () => {
      localStorage.setItem(
        "scrollPosition",
        JSON.stringify({ x: window.scrollX, y: window.scrollY })
      );
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>{children}</div>;
}

ScrollableComponent.propTypes = {
  children: PropTypes.node,
};

export default ScrollableComponent;
