import { useEffect, useState } from "react";
import UniversalButton from "./UniversalButton";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  BiBell,
  BiSolidUser,
  BiHelpCircle,
  BiCategoryAlt,
} from "react-icons/bi";
import useThemeStore from "../../store/UseThemeStore";
import DynamicSearch from "../DynamicSearch";
import { useLocation } from "react-router-dom";
import RightDrawer from "./RightDrawer";

const Navigation = () => {
  const navigate = useNavigate();
  const history = useLocation();

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const navStyle = {
    position: "sticky",
    top: -1,
    background: "#111727",
    zIndex: 100,
  };

  const controls = useAnimation();

  const isDarkMode = useThemeStore(
    (state) => state.theme === "dark" || state.theme === "system"
  );

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(darkQuery.matches);
    };

    darkQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, [darkQuery]);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const drawerWidth = "100%";

  return (
    <motion.div
      style={navStyle}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      <div className="mb-3 bg-white dark:bg-dark shadow-md dark:border-b dark:border-slate-500 dark:text-slate-200">
        <div className="container mx-auto flex justify-between items-center py-2 md:py-4">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <h3 className="site-logo dark:text-slate-100">
              Plug<span className="text-primary">Wetu</span>
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
          <div className="hidden md:flex items-center gap-5">
            {/* Cart icon */}
            <div className="relative cursor-pointer">
              <img
                src="/images/shopping-bag.jpg"
                alt="Cart Shopping bag"
                className="rounded-full w-[50px]"
              />
              <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-primary dark:bg-red-600 flex justify-center items-center text-sm text-white">
                0
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
          </div>
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
  );
};

export default Navigation;
