import type { NextPage } from "next";

import styled from "styled-components";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";

const Layout = styled.div`
  max-width: 1446px;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <TopBar />
      <HeroSection />
    </Layout>
  );
};

export default Home;
