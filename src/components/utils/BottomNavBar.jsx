import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BottomDrawer from "./BottomDrawer";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useCartItems, useCart } from "../../store/useCart";
import CartItem from "../cart/CartItem";
import EmptyCart from "../cart/EmptyCart";
import Search from "./Search";

const BottomNavBar = () => {
  const location = useLocation();
  const cartItems = useCartItems();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const pathname = location.pathname;
  const navigate = useNavigate();

  const [isSearchDrawerOpen, setSearchIsDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [isCategoryPage, setIsCategoryPage] = useState(false);
  const { cartTotal } = useCart();

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

    const pathSegments = pathname.split("/");
    if (pathSegments.includes("category-products")) {
      setIsCategoryPage(true);
    }
  }, [cartItems]);

  const drawerHeight = "80%";
  const searchDrawerHeight = "100%";

  return (
    <div>
      {deviceType === "mobile" && (
        <div
          className={`items-center justify-center bottom-nav-bar bg-white dark:text-slate-300 dark:bg-darken border-t dark:border-slate-800 z-20`}>
          {/* Home Feeds */}
          <Link
            to="/"
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
          {!isCategoryPage && (
            <Link
              to="/notification"
              className={`${
                pathname === "/notification" ? "bg-primary text-white" : ""
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
          )}

          {isCategoryPage && (
            <Link
              to="/notifications"
              className={`${
                isCategoryPage ? "bg-primary text-white" : ""
              } p-3 flex-1`}
            >
              <div className="flex justify-center items-center">
                <ion-icon
                  name="grid-outline"
                  style={{ fontSize: "35px" }}
                  className="dark:text-slate-100"
                ></ion-icon>
              </div>
            </Link>
          )}

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
        <div className="p-3 flex justify-between items-center border-b dark:border-slate-700">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <h3 className="site-logo dark:text-slate-100">
              Plug<span className="text-primary">Wetu</span>
            </h3>
          </Link>

          {/* Action Button */}
          <div className="flex items-center gap-3"></div>
        </div>

        {/* Action Search */}
        <Search />
      </BottomDrawer>

      {/* Cart Drawer */}
      <BottomDrawer
        isOpen={isCartDrawerOpen}
        onClose={handleToggleCartDrawer}
        height={drawerHeight}
      >
        <div className="p-3 border-b border-gray-300 dark:border-slate-700 py-4">
          <h2 className="font-normal text-xl tracking-tighter">
            Cart ({items?.length} items)
          </h2>
        </div>

        {/* Cart Summary Items */}
        <div className="dark:bg-darken h-full pt-3 overflow-y-scroll pb-32">
          {items.length > 0 ? (
            items?.map((item, index) => <CartItem key={index} item={item} />)
          ) : (
            <EmptyCart classes={"h-[450px]"} />
          )}
        </div>

        {/* View cart summary button */}
        {items.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-darken p-3 shadow-xl border-t dark:border-slate-700">
            <div className="flex gap-2 items-center">
              <CallButton handleClick={() => {}} />
              <ViewCartSummaryButton
                title={"Cart Summary" + " - Ksh " + cartTotal}
                handleClick={() => navigate("/cart")}
              />
            </div>
          </div>
        )}
      </BottomDrawer>
    </div>
  );
};

const ViewCartSummaryButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-3 flex justify-center items-center rounded-md"
    >
      {title}
    </button>
  );
};

const CallButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md"
    >
      <BiSolidPhoneCall className="text-2xl" />
    </button>
  );
};

export default BottomNavBar;
