import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BottomDrawer from "./BottomDrawer";
import { BiCartAdd, BiHeart } from "react-icons/bi";

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
        <div className="p-3">
          <h2>Search Area</h2>
        </div>
      </BottomDrawer>

      {/* Cart Drawer */}
      <BottomDrawer
        isOpen={isCartDrawerOpen}
        onClose={handleToggleCartDrawer}
        height={drawerHeight}
      >
        <div className="p-3">
          <h2>Cart Content</h2>
        </div>
      </BottomDrawer>
    </div>
  );
};

export default BottomNavBar;
