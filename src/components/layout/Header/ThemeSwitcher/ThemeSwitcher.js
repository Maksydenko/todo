import {
  useSwitchTheme,
  DARK,
  LIGHT,
} from "@/components/layout/Header/ThemeSwitcher/useSwitchTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useSwitchTheme();
  const handleSetDark = () => setTheme(DARK);
  const handleSetLight = () => setTheme(LIGHT);

  return (
    <div className="header__theme-switcher">
      {theme === DARK && (
        <button className="_icon-moon" onClick={handleSetLight}></button>
      )}
      {theme === LIGHT && (
        <button className="_icon-sun" onClick={handleSetDark}></button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
