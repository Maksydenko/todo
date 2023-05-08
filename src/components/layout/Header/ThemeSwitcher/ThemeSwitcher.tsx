import { FC, Dispatch, SetStateAction } from "react";

import {
  useSwitchTheme,
  DARK,
  LIGHT,
} from "@/components/layout/Header/ThemeSwitcher/useSwitchTheme";

const ThemeSwitcher: FC = () => {
  interface IUseSwitchTheme {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
  }
  const { theme, setTheme }: IUseSwitchTheme = useSwitchTheme();

  const handleSetDark = (): void => setTheme(DARK);
  const handleSetLight = (): void => setTheme(LIGHT);

  return (
    <div className="header__theme-switcher">
      {theme === DARK && (
        <button className="_icon-sun" onClick={handleSetLight}></button>
      )}
      {theme === LIGHT && (
        <button className="_icon-moon" onClick={handleSetDark}></button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
