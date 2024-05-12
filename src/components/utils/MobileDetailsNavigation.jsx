import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  BiCart,
  BiHome,
  BiCategory,
  BiSearchAlt,
  BiArrowBack,
  BiUserCircle,
  BiSearchAlt2,
  BiHelpCircle,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import BottomDrawer from "./BottomDrawer";
import { Link, useLocation } from "react-router-dom";
import { useCartItems } from "../../store/useCart";

const MobileDetailsNavigation = () => {
  const [isSearchDrawerOpen, setSearchIsDrawerOpen] = useState(false);
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
  }, [controls]);

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
    <React.Fragment>
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
            <BiArrowBack className="text-lg dark:text-slate-200" />
          </button>

          {/* Details Text */}
          {pathname === "/cart" ? (
            <p className="text-base font-normal dark:text-slate-200 tracking-tight">
              Cart
            </p>
          ) : (
            <p className="text-base font-normal dark:text-slate-200 tracking-tight">
              Product Details
            </p>
          )}

          {/* Call to action buttons */}
          <div className="flex gap-3 items-center">
            {/* Search Icon */}
            <button onClick={handleToggleSearchDrawer} className="">
              <BiSearchAlt className="text-lg dark:text-slate-200" />
            </button>

            {/* Cart Icon */}
            {pathname !== "/cart" && (
              <Link to={`/cart`} className="relative">
                <BiCart className="text-lg dark:text-slate-200" />
                <span className="absolute -top-2 -right-2 text-center w-4 h-4 rounded-full bg-primary text-xs text-white">
                  {cartItems.length}
                </span>
              </Link>
            )}

            {/* More Options Button */}
            <button onClick={() => setShowDropdown(true)} className="">
              <BiDotsHorizontalRounded className="text-lg dark:text-slate-200" />
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
        <div className="p-3 flex justify-between items-center border-b border-gray">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <h3 className="site-logo dark:text-slate-100 text-2xl">
              Plug<span className="text-primary">Wetu</span>
            </h3>
          </Link>

          {/* Action Button */}
          <div className="flex items-center gap-3"></div>
        </div>

        {/* Search Input */}
        <div className="m-3 p-1 rounded-full bg-[#f1f5f9] dark:bg-darkGray dark:text-slate-100 dark:border-slate-500 border border-gray flex gap-1 items-center">
          <BiSearchAlt2 className="text-gray text-3xl ml-2" />
          <input
            type="text"
            placeholder="Search for any products"
            className="w-full py-2 font-light bg-[#f1f5f9] dark:bg-darkGray rounded-full dark:text-slate-100 dark:border-slate-500 border-none focus:outline-none"
          />
        </div>
      </BottomDrawer>
    </React.Fragment>
  );
};

export default MobileDetailsNavigation;
