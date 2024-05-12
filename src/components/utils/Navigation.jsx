import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { BiHelpCircle, BiCategoryAlt, BiPhoneCall } from "react-icons/bi";
import useThemeStore from "../../store/UseThemeStore";
import DynamicSearch from "../DynamicSearch";
import RightDrawer from "./RightDrawer";
import { useCartItems } from "../../store/useCart";

const Navigation = () => {
  const [darkQuery, setDarkQuery] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const controls = useAnimation();
  const cartItems = useCartItems();

  const navStyle = {
    position: "sticky",
    top: -1,
    background: "#111727",
    zIndex: 100,
  };

  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  useEffect(() => {
    controls.start("visible");
    setDarkQuery(window.matchMedia("(prefers-color-scheme: dark)"));
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easing: "easeInOut" },
    },
  };

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const drawerWidth = "100%";

  return (
    <>
      <motion.div
        style={navStyle}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="hidden md:flex bg-primary text-white dark:bg-white dark:text-primary py-1"
      >
        <div className="flex-1 relative">
          <div className="flex justify-end items-center gap-2 mr-20">
            <p className="advert-contact">
              <BiPhoneCall className="inline" />
            </p>
          </div>
          <div className="absolute top-1 -right-5 w-[40px] h-[40px] bg-darken rotate-45 z-10"></div>
        </div>
        <div className="bg-[#57a7f7] w-[30%] relative">
          <div className="flex justify-center items-center gap-2">
            <p className="text-center advert-font">Crazy Deals CALL</p>{" "}
            <span className="advert-contact"></span>
          </div>
          <div className="absolute top-1 -right-4 w-[40px] h-[40px] bg-[#57a7f7] rotate-45"></div>
        </div>
        <div className="flex-1">
          <div className="flex justify-start items-center gap-2 ml-20">
            <p className="advert-contact">0725134449</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={navStyle}
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <div className="mb-3 bg-white dark:bg-dark shadow-md dark:border-b dark:border-slate-500 dark:text-slate-200">
          <div className="container mx-auto flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="cursor-pointer">
              <h3 className="site-logo dark:text-slate-100">
                Plug<span className="text-primary">Wetu</span>
                <img src={""} alt="" />
              </h3>
            </Link>
            {/* Links */}
            <div className="hidden md:flex gap-4">
              <DynamicSearch />
            </div>

            <div className="flex gap-2 items-center md:hidden">
              <Link to="/help-center" className="">
                <BiHelpCircle
                  style={{ fontSize: "25px" }}
                  className="dark:text-slate-100"
                />
              </Link>

              <div onClick={handleToggleNav} className="">
                <BiCategoryAlt
                  name="grid"
                  style={{ fontSize: "25px" }}
                  className="dark:text-slate-100"
                />
              </div>
            </div>

            {/* Action Button */}
            <Link to="/cart" className="hidden md:flex items-center gap-5">
              {/* Cart icon */}
              <div className="relative cursor-pointer">
                <img
                  src="/images/shopping-bag.jpg"
                  alt="Cart Shopping bag"
                  className="rounded-full w-[50px]"
                />
                <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-primary dark:bg-red-600 flex justify-center items-center text-sm text-white">
                  {cartItems.length}
                </span>
              </div>

              <Link
                to="/login"
                className="btn bg-secondary hover:text-slate-100 text-slate-100 dark:bg-white dark:text-secondary hover:bg-primary hover:border-secondary py-2 px-8 rounded-[50px] cursor-pointer transition ease-in-out delay-150"
              >
                <p className="text-[18px] font-normal tracking-tighter">
                  Sign Up
                </p>
              </Link>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <RightDrawer
          isOpen={isNavOpen}
          onClose={handleToggleNav}
          drawerWidth={drawerWidth}
        >
          <div className="p-3 border-b border-gray-300">
            <h2 className="font-bold text-2xl tracking-tighter">Categories</h2>
          </div>
        </RightDrawer>
      </motion.div>
    </>
  );
};

export default Navigation;
