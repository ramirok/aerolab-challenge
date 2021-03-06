import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import TopBar from "../components/TopBar/TopBar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Footer from "../components/Footer";
import toasts from "../lib/Toasts";
import { theme } from "../components/ui components/styleVariables";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Explore The Tech Zone</title>
        <meta
          name="description"
          content="Check out the latest tech products available. Visit our website for expert advice."
          key="desc"
        />
      </Head>
      <StyledLayout>
        <TopBar />
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <Footer />

        {/* toasts notifications container */}
        <toasts.ToasterCustom />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Home;

const StyledLayout = styled.div`
  max-width: 1464px;
  margin: 0 auto;
  width: 94%;

  @media screen and (min-width: 1025px) {
    width: 90%;
  }

  // waves background
  &::before {
    content: "";
    position: absolute;
    top: 150px;
    width: 100%;
    left: 0;
    height: 1300px;
    z-index: -10;
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='20' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='0.5' stroke='hsla(259, 0%, 85%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-160,-160)' fill='url(%23a)'/></svg>");
  }
`;
