import { FC, useState, useEffect } from "react";

import { useThemeSwitch } from "@/components/layout/Header/ThemeSwitcher/useThemeSwitch";

import { Theme } from "./theme.enum";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useThemeSwitch();
  const [switcherValue, setSwitcherValue] = useState("");
  const isDarkTheme = theme === Theme.Dark;

  const handleSetTheme = () => {
    if (isDarkTheme) {
      setTheme(Theme.Light);
    } else {
      setTheme(Theme.Dark);
    }
  };

  useEffect(() => {
    if (isDarkTheme) {
      setSwitcherValue("_icon-sun");
    } else {
      setSwitcherValue("_icon-moon");
    }
  }, [theme]);

  return (
    <div className="header__theme-switcher">
      <button className={switcherValue} onClick={handleSetTheme}></button>
    </div>
  );
};

export default ThemeSwitcher;
