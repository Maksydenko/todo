import { FC } from "react";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Header: FC = () => (
  <header className="header">
    <div className="header__container">
      <Link href="/" className="header__logo">
        To do
      </Link>
      <ThemeSwitcher />
    </div>
  </header>
);

export default Header;
