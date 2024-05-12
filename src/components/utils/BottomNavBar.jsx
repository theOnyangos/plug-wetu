import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BottomDrawer from "./BottomDrawer";
import {
  BiCartAdd,
  BiHeart,
  BiSearchAlt2,
  BiSolidPhoneCall,
} from "react-icons/bi";
import { useCartItems } from "../../store/useCart";
import CartItem from "../cart/CartItem";
import EmptyCart from "../cart/EmptyCart";
import EmptySearch from "./EmptySearch";

const BottomNavBar = () => {
  const location = useLocation();
  const cartItems = useCartItems();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const pathname = location.pathname;

  const [isSearchDrawerOpen, setSearchIsDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [items, setItems] = useState([]);

  let deviceType = "desktop";

  if (isMobile) {
    deviceType = "mobile";
  } else if (isTablet) {
    deviceType = "tablet";
  }

  const handleToggleSearchDrawer = () => {
    setSearchIsDrawerOpen(!isSearchDrawerOpen);
  };

  const handleToggleCartDrawer = () => {
    setCartDrawerOpen(!isCartDrawerOpen);
  };

  useMemo(() => {
    setItems(cartItems);
  }, [cartItems]);

  const drawerHeight = "80%";
  const searchDrawerHeight = "100%";

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
                {cartItems.length}
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
        height={searchDrawerHeight}
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

        {/* Search Results */}
        <EmptySearch classes={"h-[450px]"} />
      </BottomDrawer>

      {/* Cart Drawer */}
      <BottomDrawer
        isOpen={isCartDrawerOpen}
        onClose={handleToggleCartDrawer}
        height={drawerHeight}
      >
        <div className="p-3 border-b border-gray-300 dark:border-slate-700">
          <h2 className="font-normal text-xl tracking-tighter">
            Cart ({items?.length} items)
          </h2>
        </div>

        {/* Cart Summary Items */}
        {items.length > 0 ? (
          items?.map((item, index) => <CartItem key={index} item={item} />)
        ) : (
          <EmptyCart classes={"h-[450px]"} />
        )}

        {/* View cart summary button */}
        {items.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-darken p-3 shadow-xl">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-2 rounded-md">
                  <BiSolidPhoneCall className="text-2xl" />
                </button>
              </div>
              <button className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-2 flex justify-center items-center rounded-md">
                View Cart Summary
              </button>
            </div>
          </div>
        )}
      </BottomDrawer>
    </div>
  );
};

export default BottomNavBar;
