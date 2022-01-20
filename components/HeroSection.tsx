import Image from "next/image";
import styled from "styled-components";
import HeroImage from "../assets/hero-desktop.avif";
import DownArrow from "../assets/arrowDownIcon.svg";
import { Button } from "./ui/ButtonComponents";
import { TextL1 } from "./ui/TextComponents";
import { TitleL1 } from "./ui/TitleComponents";
import Link from "next/link";

const HeroSection = () => {
  return (
    <StyledContainer>
      <StyledTextContent>
        <TextL1 allCaps>explore the</TextL1>
        <TitleL1 color="gradient">tech</TitleL1>
        <TitleL1>zone</TitleL1>
        <TextL1>
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </TextL1>
        <Link href="#products">
          <a tabIndex={-1}>
            <Button color="white">
              VIEW ALL PRODUCTS{"    "}
              <Image src={DownArrow} alt="arrow down" width={14} height={17} />
            </Button>
          </a>
        </Link>
      </StyledTextContent>

      <StyledImageContent>
        <Image
          src={HeroImage}
          alt="man with tech products"
          width={600}
          height={620}
          objectFit="cover"
          priority
          objectPosition="top"
        />
      </StyledImageContent>
    </StyledContainer>
  );
};

export default HeroSection;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;

  @media screen and (min-width: 1025px) {
    align-self: flex-end;
    max-width: 600px;
    display: block;
    text-align: left;
  }

  & a {
    margin-top: 40px;
    display: inline-block;
    width: 100%;
    & button {
      width: 100%;
    }
    @media screen and (min-width: 1025px) {
      margin-top: 70px;
    }
    @media screen and (min-width: 1404px) {
      width: auto;
      & button {
        width: auto;
      }
    }
  }
`;

const StyledImageContent = styled.div`
  position: relative;
  max-width: 400px;
  @media screen and (min-width: 1025px) {
    max-width: 100%;
  }

  &::before {
    @media screen and (min-width: 1025px) {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 50%;
      width: 105%;
      height: 90%;
      transform: translateX(-50%);
      background: linear-gradient(
        102.47deg,
        ${({ theme }) => theme.colors.specials.gradientIllustrationBG[0]} -5.34%,
        ${({ theme }) => theme.colors.specials.gradientIllustrationBG[1]}
          106.58%
      );
      border-radius: 105px;
      opacity: 0.7;
    }
  }
`;
