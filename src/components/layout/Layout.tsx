import { FC } from "react";

import Meta from "@/components/layout/Meta";
import Header from "./Header/Header";
import ScrollTop from "./ScrollTop/ScrollTop";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic-ext"] });

interface LayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <div className={`wrapper ${openSans.className}`}>
      <Header />
      <main className={`${className}-page`}>{children}</main>
      <ScrollTop />
    </div>
  </>
);

export default Layout;
