import Image from "next/image";
import styled from "styled-components";
import AerolabSkeleton from "../../assets/aerolabSkeleton.svg";

const ProductCardSkeleton = () => {
  return (
    <StyledContainer>
      <div className="card">
        <div className="card__img">
          <Image src={AerolabSkeleton} alt="loading" />
        </div>
        <div className="card__content">
          <div className="card__title"></div>
          <div className="card__category"></div>
        </div>
      </div>
      <div className="button"></div>
    </StyledContainer>
  );
};

export default ProductCardSkeleton;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 80px;

  & .card {
    background-color: white;
    margin-bottom: 16px;
    border-radius: 16px;
    border: 1px solid #dae4f2;
    transition: all 0.2s;
    overflow: hidden;

    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 350px;
      overflow: hidden;
      transition: all 0.2s;
    }

    &__content {
      border-top: 1px solid #dae4f2;
      padding: 16px 24px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & div {
        animation: loading 1s ease infinite;
        background: linear-gradient(91deg, #dae4f2, #e6edf7);
        background-size: 400% 400%;
        height: 40%;
        border-radius: 100px;
        &:first-child {
          width: 90%;
        }
        &:last-child {
          width: 60%;
        }
      }
    }
  }

  & .button {
    animation: loading 1s ease infinite;
    background: linear-gradient(91deg, #dae4f2, #e6edf7);
    background-size: 400% 400%;
    height: 50px;
    border-radius: 12px;
  }

  @keyframes loading {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 51%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
