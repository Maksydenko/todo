import { FC } from "react";

import {
  useSwitchTheme,
  DARK,
  LIGHT,
} from "@/components/layout/Header/ThemeSwitcher/useSwitchTheme";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useSwitchTheme();

  const handleSetDark = (): void => setTheme(DARK);
  const handleSetLight = (): void => setTheme(LIGHT);

  return (
    <div className="header__theme-switcher">
      {theme === DARK ? (
        <button className="_icon-sun" onClick={handleSetLight}></button>
      ) : (
        <button className="_icon-moon" onClick={handleSetDark}></button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
