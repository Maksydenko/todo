import { NextPage } from "next";
import NotFoundPage from "@/components/screens/404/404";
import Layout from "@/components/layout/Layout";

const Page404: NextPage = () => (
  <Layout title="404" className="404">
    <NotFoundPage />
  </Layout>
);

export default Page404;
