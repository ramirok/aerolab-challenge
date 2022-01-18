import styled from "styled-components";
import FeatureCard from "./ui/FeatureCard";
import Feature1 from "../assets/featuresCards/feature1.svg";
import Feature2 from "../assets/featuresCards/feature2.svg";
import Feature3 from "../assets/featuresCards/feature3.svg";
import Icon1 from "../assets/featuresCards/icon1.svg";
import Icon2 from "../assets/featuresCards/icon2.svg";
import Icon3 from "../assets/featuresCards/icon3.svg";

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
  margin-top: 100px;
  display: flex;
  justify-content: center;

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

  //   gradient background
  &::after {
    content: "";
    position: absolute;
    height: 528px;
    width: 100%;
    top: 1050px;
    bottom: 40px;
    z-index: -2;
    background-image: linear-gradient(
      102.47deg,
      rgba(23, 111, 235, 0.5) -5.34%,
      rgba(255, 128, 255, 0.5) 106.58%
    );
    background-color: transparent;
  }
`;
