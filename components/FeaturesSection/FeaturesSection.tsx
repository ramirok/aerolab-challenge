import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import Feature1 from "../../assets/featuresCards/feature1.avif";
import Feature2 from "../../assets/featuresCards/feature2.avif";
import Feature3 from "../../assets/featuresCards/feature3.avif";
import Icon1 from "../../assets/featuresCards/icon1.svg";
import Icon2 from "../../assets/featuresCards/icon2.svg";
import Icon3 from "../../assets/featuresCards/icon3.svg";

const FeaturesSection = () => {
  const featureCards = [
    {
      img: Feature1,
      alt: "person riding a rocket",
      title: "1—BROWSE",
      description:
        "Browse our tech catalog with more than 20 top tech products",
      icon: Icon1,
    },
    {
      img: Feature2,
      alt: "hands touching each other",
      title: "2—CHOOSE",
      description: "Exchange your hard earned AeroPoints for the item you want",
      icon: Icon2,
    },
    {
      img: Feature3,
      alt: "person using a computer",
      title: "3—ENJOY!",
      description:
        "All done, you can relax! We’ll take care of delivery of your tech item!",
      icon: Icon3,
    },
  ];
  return (
    <StyledContainer>
      {featureCards.map((card) => (
        <FeatureCard {...card} key={card.title} />
      ))}
    </StyledContainer>
  );
};

export default FeaturesSection;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  // position: relative;
  margin-top: -20px;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1025px) {
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 100px;
  }

  @media screen and (min-width: 1404px) {
    & > *:first-child {
      transform: rotate(-2deg);
      margin-top: 30px;
      margin-right: -80px;
    }

    & > *:last-child {
      transform: rotate(2deg);
      margin-top: 30px;
      margin-left: -80px;
    }
  }

  //   gradient background
  &::after {
    top: 600px;
    height: 1700px;
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    z-index: -2;
    background-image: linear-gradient(
      102.47deg,
      rgba(23, 111, 235, 0.5) -5.34%,
      rgba(255, 128, 255, 0.5) 106.58%
    );
    background-color: transparent;

    @media screen and (min-width: 950px) {
      top: 750px;
      height: 700px;
    }
    @media screen and (min-width: 1025px) {
      top: 1400px;
      height: 600px;
    }

    @media screen and (min-width: 1404px) {
      top: 950px;
      height: 530px;
    }
  }
`;
