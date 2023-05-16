import { NextPage } from "next";
import HomePage from "@/components/screens/Home/Home";
import Layout from "@/components/layout/Layout";

const Home: NextPage = () => (
  <Layout title="Home" className="home">
    <HomePage />
  </Layout>
);

export default Home;
