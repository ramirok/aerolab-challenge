import Image from "next/image";
import styled from "styled-components";
import HeroImage from "../assets/heroImage.svg";

const Container = styled.section`
  display: flex;
`;

const HeroSection = () => {
  return (
    <Container>
      <div>
        <p>explore the</p>
        <p>tech zone</p>
        <p>
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </p>

        <button>VIEW ALL PRODUCTS</button>
      </div>
      <div>
        <Image src={HeroImage} alt="man with tech products" />
      </div>
    </Container>
  );
};

export default HeroSection;
