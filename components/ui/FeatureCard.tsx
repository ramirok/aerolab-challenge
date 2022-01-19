import Image from "next/image";
import styled from "styled-components";
import { TextL1 } from "./TextComponents";
import { TitleL3 } from "./TitleComponents";

interface FeatureCardProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({
  img,
  alt,
  title,
  description,
  icon,
}: FeatureCardProps) => {
  return (
    <StyledContainer>
      <div className="card__img">
        <Image src={img} alt={alt} />
      </div>

      <div className="card__content">
        <div className="card__title">
          <div className="card__icon">
            <Image src={icon} alt="icon" width={30} height={30} />
          </div>
          <TitleL3 color="gradient">{title}</TitleL3>
        </div>
        <TextL1>{description}</TextL1>
      </div>
    </StyledContainer>
  );
};

export default FeatureCard;

const StyledContainer = styled.div`
  height: min-content;
  border: 1px solid #dae4f2;
  border-radius: 32px;
  background-color: #ffffff99;
  padding: 12px;
  z-index: 0;
  transition: all 0.2s;
  margin-bottom: 24px;
  width: 335px;

  @media screen and (min-width: 900px) {
    width: 300px;
  }
  @media screen and (min-width: 1024px) {
    width: 532px;
  }

  &:hover {
    z-index: 10;
    border: 1px solid #7c899c;
    .card__img {
      & img {
        transform: scale(1.1) rotate(-5deg);
      }
    }
  }

  .card__img {
    background-color: white;
    border-top-left-radius: 23px;
    border-top-right-radius: 23px;
    background-image: linear-gradient(
      102.47deg,
      rgba(23, 111, 235, 0.5) -5.34%,
      rgba(255, 128, 255, 0.5) 106.58%
    );

    overflow: hidden;

    & img {
      transition: all 0.2s;
    }
  }

  .card__content {
    background-color: white;
    padding: 16px;
    border: 1px solid #dae4f2;
    border-top: none;
    border-bottom-left-radius: 23px;
    border-bottom-right-radius: 23px;
    @media screen and (min-width: 1024px) {
      height: 170px;
    }
  }

  .card__title {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .card__icon {
    background-color: #e5f0ff;
    border-radius: 8px;
    padding: 8px;
    margin-right: 16px;
  }
`;
