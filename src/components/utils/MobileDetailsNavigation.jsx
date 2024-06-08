import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BiCart,
  BiHome,
  BiCategory,
  BiSearchAlt,
  BiArrowBack,
  BiUserCircle,
  BiHelpCircle,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import BottomDrawer from "./BottomDrawer";
import { Link, useLocation } from "react-router-dom";
import { useCartItems } from "../../store/useCart";
import Search from "./Search";

const MobileDetailsNavigation = ({ title }) => {
  const [isSearchDrawerOpen, setSearchIsDrawerOpen] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);
  const searchDrawerHeight = "100%";
  const controls = useAnimation();
  const location = useLocation();
  const pathname = location.pathname;
  const cartItems = useCartItems();

  const navStyle = {
    position: "sticky",
    top: -1,
    zIndex: 100,
  };

  useEffect(() => {
    controls.start("visible");

    const pathSegments = pathname.split("/");
    if (pathSegments.includes("product-rating")) {
      setIsRating(true);
    }

    if (pathSegments.includes("category-products")) {
      setIsCategory(true);
    }

    if (pathSegments.includes("notifications")) {
      setIsNotifications(true);
    }
  }, [controls, pathname]);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleToggleSearchDrawer = () => {
    setSearchIsDrawerOpen(!isSearchDrawerOpen);
  };

  return (
    <>
      <motion.div
        style={navStyle}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="bg-white dark:bg-dark px-3 py-5 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Go Back Button */}
          <button onClick={() => window.history.back()} className=" rounded-md">
            <BiArrowBack className="text-2xl dark:text-slate-200" />
          </button>

          {/* Details Text */}
          {pathname === "/cart" ? (
            <p className="text-base font-normal dark:text-slate-200 tracking-tight">
              {title}
            </p>
          ) : (
            <p className="text-base font-normal dark:text-slate-200 tracking-tight overflow-hidden">
              {title}
            </p>
          )}

          {/* Call to action buttons */}
          <div className="flex gap-3 items-center">
            {/* Search Icon */}
            {!isRating && isNotifications && (
              <button onClick={handleToggleSearchDrawer} className="">
                <BiSearchAlt className="text-2xl dark:text-slate-200" />
              </button>
            )}

            {/* Cart Icon */}
            {pathname !== "/cart" &&
              !isRating &&
              !isCategory &&
              isNotifications && (
                <Link to={`/cart`} className="relative">
                  <BiCart className="text-2xl dark:text-slate-200" />
                  <span className="absolute -top-1 -right-2 text-center w-4 h-4 rounded-full bg-primary text-xs text-white">
                    {cartItems.length}
                  </span>
                </Link>
              )}

            {/* More Options Button */}
            <button onClick={() => setShowDropdown(true)} className="">
              <BiDotsHorizontalRounded className="text-2xl dark:text-slate-200" />
            </button>

            {/* Dropdown */}
            {showDropDown && (
              <>
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="fixed inset-0 bg-black opacity-25"
                ></button>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="dropdown-content absolute -right-3 top-11 bg-white dark:bg-dark shadow-md"
                >
                  <Link
                    to="/"
                    className="flex gap-2 items-center py-2 px-4 dark:text-slate-100"
                  >
                    <BiHome className="text-xl" /> Home
                  </Link>
                  <Link
                    to="/categories"
                    className="flex gap-2 items-center py-2 px-4 dark:text-slate-100"
                  >
                    <BiCategory className="text-xl" /> Categories
                  </Link>
                  <Link
                    to="/account"
                    className="flex gap-2 items-center py-2 px-4 dark:text-slate-100"
                  >
                    <BiUserCircle className="text-xl" /> Account
                  </Link>
                  <Link
                    to="/help"
                    className="flex gap-2 items-center py-2 px-4 dark:text-slate-100"
                  >
                    <BiHelpCircle className="text-xl" /> Help
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Search Drawer */}
      <BottomDrawer
        isOpen={isSearchDrawerOpen}
        onClose={handleToggleSearchDrawer}
        height={searchDrawerHeight}
      >
        <div className="p-3 flex justify-between items-center border-b dark:border-slate-700">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <h3 className="site-logo dark:text-slate-100 text-2xl">
              Plug<span className="text-primary">Wetu</span>
            </h3>
          </Link>

          {/* Action Button */}
          <div className="flex items-center gap-3"></div>
        </div>

        {/* Action Search */}
        <Search />
      </BottomDrawer>
    </>
  );
};

MobileDetailsNavigation.propTypes = {
  title: PropTypes.string,
};

export default MobileDetailsNavigation;
