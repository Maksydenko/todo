import { FC } from "react";

import { useSwitchTheme } from "@/components/layout/Header/ThemeSwitcher/useSwitchTheme";
import { Theme } from "./theme.enum";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useSwitchTheme();

  interface IHandleSetTheme {
    (): void;
  }
  const handleSetDark: IHandleSetTheme = () => setTheme(Theme.Dark);
  const handleSetLight: IHandleSetTheme = () => setTheme(Theme.Light);

  return (
    <div className="header__theme-switcher">
      {theme === Theme.Dark ? (
        <button className="_icon-sun" onClick={handleSetLight}></button>
      ) : (
        <button className="_icon-moon" onClick={handleSetDark}></button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
