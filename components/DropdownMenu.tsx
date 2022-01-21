import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import ArrowUpIcon from "../assets/arrowUpIcon.svg";
import { Button } from "./ui/ButtonComponents";
import { OptionSelector } from "./ui/SelectorComponents";
import { TextL1, TextL2 } from "./ui/TextComponents";
import Spinner from "./ui/Spinner";
import { useUser } from "../context/userContext";
import AerolabIconSvg from "../assets/AerolabIconSvg";
import { Post } from "../lib/FetchService";
import toasts from "../lib/Toasts";

const DropdownMenu = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [pointsSelected, setPointsSelected] = useState<number>(NaN);
  const [isLoading, setIsLoading] = useState(false);
  const pointsOptions = [1000, 5000, 7500];

  const user = useUser();

  const addPoints = async (points: number) => {
    setIsLoading(true);
    const response = await Post("user/points", { amount: points });
    if (response.success) {
      setPointsSelected(NaN);
      user.addRemoveUserPoints(points);
    } else {
      toasts.fail("There was a problem while adding points");
    }
    setIsLoading(false);
  };

  return (
    <StyledContainer
      tabIndex={-1}
      onBlur={() => setMenuIsVisible(false)}
      onFocus={() => setMenuIsVisible(true)}
    >
      <StyledMenuButton>
        <AerolabIconSvg height={24} width={24} />
        <TextL1 color="gradient">
          {user.isLoading ? <Spinner color="dark" /> : user.userData.points}
        </TextL1>
        <Image
          src={ArrowUpIcon}
          alt="arrow"
          height={7.5}
          width={15}
          className="arrowIcon"
        />
      </StyledMenuButton>

      <StyledMenuPanel className={`${menuIsVisible && "active"}`}>
        <TextL1 color="black" className="menuPanel__title">
          Add Balance
        </TextL1>

        <div className="card__container">
          <div>
            <TextL1 color="white">AeroCard</TextL1>
            <AerolabIconSvg bg="white" color="dark" />
          </div>
          <div>
            <TextL2 color="white">{user.userData.name}</TextL2>
            <TextL2 color="white">
              {new Date(user.userData.createDate).toLocaleDateString(
                undefined,
                {
                  month: "2-digit",
                  year: "2-digit",
                }
              )}
            </TextL2>
          </div>
        </div>

        <div className="credits__options">
          {pointsOptions.map((option) => (
            <OptionSelector
              key={option}
              active={option === pointsSelected}
              value={String(option)}
              onClick={() => setPointsSelected(option)}
              groupName="select credits"
            />
          ))}
        </div>
        <Button
          secondary
          disabled={!Boolean(pointsSelected)}
          onClick={() => addPoints(pointsSelected)}
          color="white"
          className="credits__addButton"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {!Boolean(pointsSelected) ? (
                <AerolabIconSvg bg="gray" color="white" />
              ) : (
                <AerolabIconSvg bg="white" color="gradient" />
              )}{" "}
              Add Point
            </>
          )}
        </Button>
      </StyledMenuPanel>
    </StyledContainer>
  );
};

export default DropdownMenu;

const StyledContainer = styled.div`
  position: relative;
`;

const StyledMenuButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 140px;
  height: 40px;
  border: 1px solid #dae4f2;
  border-radius: 16px;
  transition: all 0.2s;
  cursor: pointer;

  @media screen and (min-width: 1025px) {
    width: 156px;
    height: 48px;
    & > svg {
      width: 32px;
      height: 32px;
    }
  }
  &:hover {
    transform: scale(1.03);
    border: 1px solid ${({ theme }) => theme.colors.neutrals[600]};
  }
`;
const StyledMenuPanel = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.neutrals[0]};
  border: 1px solid #dae4f2;
  padding: 16px 16px;
  top: 100%;
  margin-top: 10px;
  right: 0;
  border-radius: 16px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  & .menuPanel__title {
    padding-bottom: 10px;
    border-bottom: 1px solid #dae4f2;
  }

  & .credits {
    &__options {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }

    &__addButton {
      margin-top: 24px;
      width: 100%;
    }
  }

  & .card {
    &__container {
      width: 265px;
      margin-top: 16px;
      height: 150px;
      background-color: ${({ theme }) => theme.colors.neutrals[900]};
      border-radius: 8px;
      padding: 16px;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > div {
        display: flex;
        justify-content: space-between;
      }
      //waves background
      &::after {
        content: "";
        position: absolute;
        width: 200%;
        height: 160%;
        left: -50%;
        top: 20px;
        background: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='20' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,0)'/><path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='0.5' stroke='hsla(259, 0%, 85%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-160,-160)' fill='url(%23a)'/></svg>");
        transform: rotate(-10deg) scale(0.6);
      }
    }
  }
`;
