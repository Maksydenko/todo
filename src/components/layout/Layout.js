import Meta from "@/components/meta/Meta";
import Header from "./Header/Header";

const Layout = ({ title, className, children }) => {
  return (
    <>
      <Meta title={title} />
      <Header />
      <main className={className}>{children}</main>
    </>
  );
};

export default Layout;
