import { useEffect, useState } from "react";
import useThemeStore from "../store/UseThemeStore";
import toast from "react-hot-toast";

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

  const toasterTheme = (type) => {
    const commonSettings = {
      style: {
        border: "1px solid",
        padding: "16px",
      },
      iconTheme: {},
    };

    switch (type) {
      case "error":
        commonSettings.style.color = "#ff4d4f";
        commonSettings.iconTheme.primary = "#ff4d4f";
        break;
      case "success":
        commonSettings.style.color = "#52c41a";
        commonSettings.iconTheme.primary = "#52c41a";
        break;
      case "info":
        commonSettings.style.color = "#1890ff";
        commonSettings.iconTheme.primary = "#1890ff";
        break;
      case "warning":
        commonSettings.style.color = "#faad14";
        commonSettings.iconTheme.primary = "#faad14";
        break;
      default:
        break;
    }

    const lightModeSettings = {
      ...commonSettings,
      style: {
        ...commonSettings.style,
        color: isDarkMode ? "#ffffff" : commonSettings.style.color,
        backgroundColor: isDarkMode ? "#182749" : "#ffffff",
        borderColor: isDarkMode ? "#ccc" : commonSettings.style.color,
      },
      iconTheme: {
        ...commonSettings.iconTheme,
        secondary: isDarkMode ? "#182749" : "#ffffff",
      },
    };

    const darkModeSettings = {
      ...commonSettings,
      style: {
        ...commonSettings.style,
        color: isDarkMode ? "#ffffff" : commonSettings.style.color,
        backgroundColor: isDarkMode ? "#182749" : "#000000",
        borderColor: isDarkMode ? "#ccc" : commonSettings.style.color,
      },
      iconTheme: {
        ...commonSettings.iconTheme,
        secondary: isDarkMode ? "#ffffff" : "#182749",
      },
    };

    return isDarkMode ? darkModeSettings : lightModeSettings;
  };

  const showToast = (type, message) => {
    const theme = toasterTheme(type);
    toast[type](message, {
      ...theme,
    });
  };

  return { showToast };
};

export default useToastTheme;
