import { FC } from "react";

import Layout from "@/components/layout/Layout";
import ToDo from "./ToDo/ToDo";

const Home: FC = () => (
  <Layout title="Home" className="home">
    <ToDo />
  </Layout>
);

export default Home;
