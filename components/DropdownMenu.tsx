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

const Container = styled.div`
  position: relative;

  & .menuButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    width: 156px;
    height: 48px;
    border: 1px solid #dae4f2;
    border-radius: 16px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
      border: 1px solid #7c899c;
    }
  }

  & .menuPanel {
    background-color: white;
    position: absolute;
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

    &__title {
      padding-bottom: 10px;
      border-bottom: 1px solid #dae4f2;
    }

    &__creditsOptions {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }
    &__addCredits {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    &__card {
      width: 265px;
      margin-top: 16px;
      height: 150px;
      background-color: #252f3d;
      border-radius: 8px;
      padding: 16px;
      position: relative;
      overflow: hidden;
      & .card__logo {
        position: absolute;
        top: 16px;
        right: 16px;
      }
      & .card__name {
        position: absolute;
        bottom: 16px;
      }
      & .card__date {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }
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

const DropdownMenu = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [pointsSelected, setPointsSelected] = useState<number>(NaN);
  const [isLoading, setIsLoading] = useState(false);
  const pointsOptions = [1000, 5000, 7500];

  const user = useUser();

  const addPoints = async (points: number) => {
    setIsLoading(true);
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/user/points",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUyZDZhMWJjNDgzYTAwMjE2ZGE5NjgiLCJpYXQiOjE2NDIyNTYwMzN9.VVA-ablaYVIMKITor6C3F5DnVb9CjfrD-egzU_mAwyY",
        },
        body: JSON.stringify({ amount: points }),
      }
    );
    if (response.ok) {
      const parsedResponse = await response.json();
      setPointsSelected(NaN);
      user.addRemoveUserPoints(points);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <div
        className="menuButton"
        onClick={() => setMenuIsVisible((prev) => !prev)}
      >
        <AerolabIconSvg height={32} width={32} />
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
      </div>
      <div className={`menuPanel ${menuIsVisible && "active"}`}>
        <TextL1 color="black" className="menuPanel__title">
          Add Balance
        </TextL1>

        <div className="menuPanel__card">
          <TextL1 color="white" className="card__company">
            AeroCard
          </TextL1>
          <AerolabIconSvg className="card__logo" bg="white" color="dark" />
          <TextL2 color="white" className="card__name">
            {user.userData.name}
          </TextL2>
          <TextL2 color="white" className="card__date">
            {new Date(user.userData.createDate).toLocaleDateString(undefined, {
              month: "2-digit",
              year: "2-digit",
            })}
          </TextL2>
        </div>

        <div className="menuPanel__creditsOptions">
          {pointsOptions.map((option) => (
            <div onClick={() => setPointsSelected(option)} key={option}>
              <OptionSelector active={option === pointsSelected}>
                {option}
              </OptionSelector>
            </div>
          ))}
        </div>

        <div className="menuPanel__addCredits">
          <Button
            secondary
            disabled={!Boolean(pointsSelected)}
            onClick={() => addPoints(pointsSelected)}
            color="white"
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <AerolabIconSvg bg="white" color="gradient" /> Add Point
              </>
            )}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default DropdownMenu;
