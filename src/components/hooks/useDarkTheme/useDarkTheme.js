import { useState } from "react";

export const useDarkTheme = () => {
  const getTheme = () => window.localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(getTheme());

  const updateLocalTheme = (theme = "dark") => {
    window.localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      updateLocalTheme("light");
      return;
    }
    updateLocalTheme("dark");
  };

  return [theme, toggleTheme];
};
