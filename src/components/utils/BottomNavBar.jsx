import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BottomDrawer from "./BottomDrawer";
import { BiCartAdd, BiHeart, BiSearchAlt2 } from "react-icons/bi";

const BottomNavBar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  let deviceType = "desktop";

  if (isMobile) {
    deviceType = "mobile";
  } else if (isTablet) {
    deviceType = "tablet";
  }

  // Get the pathname from the url
  const pathname = location.pathname;

  const [isSearchDrawerOpen, setSearchIsDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleToggleSearchDrawer = () => {
    setSearchIsDrawerOpen(!isSearchDrawerOpen);
  };

  const handleToggleCartDrawer = () => {
    setCartDrawerOpen(!isCartDrawerOpen);
  };

  const drawerHeight = "80%";

  return (
    <div>
      {deviceType === "mobile" && (
        <div
          className={`items-center justify-center bottom-nav-bar bg-white dark:text-slate-300 dark:bg-darken border-t dark:border-slate-800`}
        >
          {/* Home Feeds */}
          <Link
            to="/feeds"
            className={`${
              pathname === "/" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center">
              <ion-icon
                name="home-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
            </div>
          </Link>

          {/* Cart */}
          <div
            onClick={handleToggleCartDrawer}
            className={`${
              pathname === "/cart" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center relative">
              <ion-icon
                name="cart-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
              <span className="absolute -top-1 right-1 text-center w-5 h-5 rounded-full bg-red-500 text-sm text-white">
                0
              </span>
            </div>
          </div>

          {/* Search */}
          <div
            onClick={handleToggleSearchDrawer}
            className={`${
              pathname === "/search" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center">
              <ion-icon
                name="search-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
            </div>
          </div>

          {/* Notifications */}
          <Link
            to="/notifications"
            className={`${
              pathname === "/notifications" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center relative">
              <ion-icon
                name="notifications-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
              <span className="absolute -top-1 right-1 text-center w-5 h-5 rounded-full bg-red-500 text-sm text-white">
                0
              </span>
            </div>
          </Link>

          {/* Account */}
          <Link
            to="/account"
            className={`${
              pathname === "/account" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center">
              <ion-icon
                name="person-circle-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
            </div>
          </Link>
        </div>
      )}

      {/* Search Drawer */}
      <BottomDrawer
        isOpen={isSearchDrawerOpen}
        onClose={handleToggleSearchDrawer}
      >
        <div className="p-3 flex justify-between items-center border-b border-gray">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <h3 className="site-logo dark:text-slate-100">
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
            className="w-full p-3 font-light bg-[#f1f5f9] dark:bg-darkGray rounded-full dark:text-slate-100 dark:border-slate-500 border-none focus:outline-none"
          />
        </div>
      </BottomDrawer>

      {/* Cart Drawer */}
      <BottomDrawer
        isOpen={isCartDrawerOpen}
        onClose={handleToggleCartDrawer}
        height={drawerHeight}
      >
        <div className="p-3 border-b border-gray-300">
          <h2 className="font-bold text-2xl tracking-tighter">Cart Content</h2>
        </div>
      </BottomDrawer>
    </div>
  );
};

export default BottomNavBar;
