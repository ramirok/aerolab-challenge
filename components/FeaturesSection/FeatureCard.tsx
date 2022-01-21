import Image from "next/image";
import styled from "styled-components";
import { TextL1 } from "../ui components/TextComponents";
import { TitleL3 } from "../ui components/TitleComponents";

interface FeatureCardProps {
  img: StaticImageData;
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
        <Image
          src={img}
          alt={alt}
          priority
          objectFit="cover"
          objectPosition="bottom"
          width={500}
          height={500}
        />
      </div>

      <div className="card__content">
        <div className="card__title">
          <div className="card__icon">
            <Image src={icon} alt="icon" width={30} height={30} priority />
          </div>
          <TitleL3 color="gradient" as="h2">
            {title}
          </TitleL3>
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
  width: 100%;
  max-width: 335px;

  @media screen and (min-width: 950px) {
    max-width: 320px;
  }
  @media screen and (min-width: 1025px) {
  }

  @media screen and (min-width: 1404px) {
    max-width: 530px;
  }

  &:hover {
    z-index: 10;
    border: 1px solid ${({ theme }) => theme.colors.neutrals[600]};
    .card__img {
      & img {
        transform: scale(1.1) rotate(-5deg) translateY(-15%);
        @media screen and (min-width: 950px) {
          transform: scale(1.1) rotate(-5deg);
        }
      }
    }
  }

  .card__img {
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.neutrals[0]};
    border-top-left-radius: 23px;
    border-top-right-radius: 23px;
    background-image: linear-gradient(
      102.47deg,
      rgba(23, 111, 235, 0.5) -5.34%,
      rgba(255, 128, 255, 0.5) 106.58%
    );

    height: 245px;

    @media screen and (min-width: 950px) {
      height: auto;
    }
    & img {
      transform: translateY(-15%);
      transition: all 0.2s;
      @media screen and (min-width: 950px) {
        transform: translateY(0);
      }
    }
  }

  .card__content {
    background-color: ${({ theme }) => theme.colors.neutrals[0]};
    padding: 16px;
    border: 1px solid #dae4f2;
    border-top: none;
    border-bottom-left-radius: 23px;
    border-bottom-right-radius: 23px;
    @media screen and (min-width: 1025px) {
      height: 170px;
    }
  }

  .card__title {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .card__icon {
    background-color: ${({ theme }) => theme.colors.brand.light};
    border-radius: 8px;
    padding: 8px;
    margin-right: 16px;
  }
`;
