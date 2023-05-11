import { FC } from "react";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Header: FC = () => (
  <header className="header">
    <div className={`header__container ${bebasNeue.className}`}>
      <Link href="/" className="header__logo">
        To do
      </Link>
      <ThemeSwitcher />
    </div>
  </header>
);

export default Header;
