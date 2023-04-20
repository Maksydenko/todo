import Layout from "@/components/layout/Layout";
import ToDo from "./ToDo/ToDo";

const Home = () => {
  return (
    <Layout title="Home" className="home-page">
      <ToDo />
    </Layout>
  );
};

export default Home;
