import Image from "next/image";
import styled from "styled-components";
import HeroImage from "../assets/heroImage.svg";
import DownArrow from "../assets/arrowDownIcon.svg";
import { Button } from "./ui/ButtonComponents";
import { Text, TextAllCaps } from "./ui/TextComponents";
import { DesktopTitleL1Default } from "./ui/TitleComponents";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .textContainer {
    max-width: 600px;
    align-self: flex-end;
    & button {
      margin-top: 70px;
    }
  }

  & .imgContainer {
    position: relative;
  }

  & .imgContainer::before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 100%;
    height: 85%;
    transform: translateX(-50%);
    background: linear-gradient(102.47deg, #7296eb -5.34%, #eac0e9 106.58%);
    border-radius: 105px;
    opacity: 0.7;
  }
`;

const HeroSection = () => {
  return (
    <Container>
      <div className="textContainer">
        <TextAllCaps>explore the</TextAllCaps>
        <DesktopTitleL1Default colored>tech</DesktopTitleL1Default>
        <DesktopTitleL1Default>zone</DesktopTitleL1Default>
        <Text>
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </Text>
        <Button>
          VIEW ALL PRODUCTS{" "}
          <Image src={DownArrow} alt="arrow down" width={14} height={17} />
        </Button>
      </div>
      <div className="imgContainer">
        <Image
          src={HeroImage}
          alt="man with tech products"
          width={700}
          height={700}
        />
      </div>
    </Container>
  );
};

export default HeroSection;
