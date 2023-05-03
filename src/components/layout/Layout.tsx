import { FC } from "react";

import Meta from "@/components/meta/Meta";
import Header from "./Header/Header";

interface ILayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <Header />
    <main className={`${className}-page`}>{children}</main>
  </>
);

export default Layout;
