import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import ScrollTop from "./ScrollTop/ScrollTop";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link href="/" className="header__logo">
            To do
          </Link>
          <ThemeSwitcher />
        </div>
        <ScrollTop />
      </header>
    </>
  );
};

export default Header;
