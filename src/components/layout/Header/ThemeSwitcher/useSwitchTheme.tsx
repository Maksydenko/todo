import { Dispatch, SetStateAction, useState, useEffect } from "react";

export const DARK = "dark";
export const LIGHT = "light";

const isDarkTheme =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? DARK : LIGHT;

interface IUseSwitchTheme {
  (): {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
  };
}

export const useSwitchTheme: IUseSwitchTheme = () => {
  // Set the theme from local storage or the default
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || defaultTheme
  );

  useEffect(() => {
    const documentElement = document.documentElement;
    documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
