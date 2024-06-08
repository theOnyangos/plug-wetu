import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useThemeStore from "../store/UseThemeStore";

const ThemeChanger = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const [isVisible, setIsVisible] = useState(true);
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      name: "light",
      icon: "sunny",
    },
    {
      name: "dark",
      icon: "moon",
    },
    {
      name: "system",
      icon: "desktop-outline",
    },
  ];

  const matchThemeWithSystemPreference = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkQuery, element]);

  useEffect(() => {
    matchThemeWithSystemPreference();
  }, [darkQuery, element, matchThemeWithSystemPreference]);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        matchThemeWithSystemPreference();
        break;
    }
    // Update theme in Zustand store
    setTheme(theme);
  }, [theme, setTheme, element, matchThemeWithSystemPreference]);

  const themeSwitchVariants = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 0.1,
        delay: 0.5,
        else: "easeInOut",
      },
    },
  };

  const handleCloseButtonClick = () => {
    setIsVisible(false); // Hide the theme changer
  };

  return (
    <motion.div
      variants={themeSwitchVariants}
      initial="initial"
      animate="animate"
      whileHover={{ boxShadow: "0px 0px 10px 0px #105ffc" }}
      className={`fixed top-[35%] right-3 md:right-5 text-dark dark:text-slate-200 duration-100 dark:bg-dark bg-white rounded-full shadow-md z-50 ${
        isVisible ? "" : "hidden"
      }`}
    >
      {options?.map((option) => (
        <motion.button
          whileHover={{ scale: 1.1 }}
          animate={{
            scale: theme === option.name ? 1.1 : 1,
            boxShadow:
              theme === option.name ? "0px 0px 10px 0px #105ffc" : "none",
          }}
          onClick={() => setTheme(option.name)}
          key={option.name}
          className={`flex justify-center space-x-2 items-center w-8 md:w-10 h-8 md:h-10 leading-9 text-lg md:text-[28px] rounded-full ${
            theme === option.name && "text-primary bg-light dark:bg-dark"
          } m-2`}
        >
          <ion-icon name={option.icon}></ion-icon>
        </motion.button>
      ))}

      {/* Hide button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={handleCloseButtonClick}
        className={`flex justify-center space-x-2 text-dark dark:text-slate-200 items-center dark:slate-100 w-8 md:w-10 h-8 md:h-10 leading-9 text-lg md:text-[28px] rounded-full m-2`}
      >
        <ion-icon name="close"></ion-icon>
      </motion.button>
    </motion.div>
  );
};

export default ThemeChanger;
