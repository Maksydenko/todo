import { Dispatch, SetStateAction, useState, useEffect } from "react";

import { Theme } from "./theme.enum";
import { isBrowser } from "@/constants/isBrowser";

const isDarkTheme =
  isBrowser && window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? Theme.Dark : Theme.Light;

interface IUseSwitchTheme {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const useThemeSwitch = (): IUseSwitchTheme => {
  // Set the theme from local storage or the default
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || defaultTheme
  );

  useEffect(() => {
    const documentElement = document.documentElement;
    documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
