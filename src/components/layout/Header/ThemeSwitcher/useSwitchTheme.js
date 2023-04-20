import { useState, useEffect } from "react";

export const DARK = "dark";
export const LIGHT = "light";

const isDarkTheme =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? DARK : LIGHT;

export const useSwitchTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || defaultTheme
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
