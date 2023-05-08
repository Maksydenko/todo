import { FC } from "react";

import Meta from "@/components/layout/Meta";
import Header from "./Header/Header";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic-ext"] });

interface ILayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <div className={`wrapper ${openSans.className}`}>
      <Header />
      <main className={`${className}-page`}>{children}</main>
    </div>
  </>
);

export default Layout;
