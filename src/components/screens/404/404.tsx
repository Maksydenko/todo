import { FC } from "react";

import { useRedirectToHomepage } from "./useRedirectToHomepage";

import Layout from "@/components/layout/Layout";

const Page404: FC = () => {
  const time: number = useRedirectToHomepage();

  return (
    <Layout title="404" className="404">
      <div className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__title">404</h1>
          <h2 className="page-not-found__label">Page not found</h2>
          <p className="page-not-found__text">
            You will be redirected to the homepage in {time}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
