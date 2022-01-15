import type { NextPage } from "next";
import styled from "styled-components";
import TopBar from "../components/TopBar";

const Layout = styled.div``;

const Home: NextPage = () => {
  return (
    <Layout>
      <TopBar />
    </Layout>
  );
};

export default Home;
