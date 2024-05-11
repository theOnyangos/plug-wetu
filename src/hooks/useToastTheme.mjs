import { useEffect, useState } from "react";
import useThemeStore from "../store/UseThemeStore";

const useToastTheme = () => {
  const [darkQuery, setDarkQuery] = useState(false);

  useEffect(() => {
    setDarkQuery(window.matchMedia("(prefers-color-scheme: dark)"));
  }, []);

  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  const toasterTheme = () => {
    const lightModeSettings = {
      style: {
        border: "1px solid #182749",
        padding: "16px",
        color: "#182749",
      },
      iconTheme: {
        primary: "#182749",
        secondary: "#FFFAEE",
      },
    };

    const darkModeSettings = {
      style: {
        border: "1px solid #ccc",
        padding: "16px",
        color: "#fff",
        backgroundColor: "#182749",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#182749",
      },
    };

    return isDarkMode ? darkModeSettings : lightModeSettings;
  };
  return { toasterTheme };
};

export default useToastTheme;
