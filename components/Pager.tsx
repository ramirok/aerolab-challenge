import Image from "next/image";
import styled from "styled-components";
import Arrow from "../assets/arrowUpIcon.svg";
import { TextL1 } from "./ui/TextComponents";

const Container = styled.div`
  display: flex;
  border: 1px solid #dae4f2;
  padding: 8px;
  border-radius: 12px;

  & .arrow {
    background-color: #e5f0ff;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    border: 1px transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      border: 1px solid #7c899c;
    }
    &-left {
      transform: rotate(90deg);
      margin-right: 20px;

      &:hover {
        transform: rotate(90deg) scale(1.03);
      }
    }
    &-right {
      transform: rotate(-90deg);
      margin-left: 20px;
      &:hover {
        transform: rotate(-90deg) scale(1.03);
      }
    }
  }
`;

const Pager = () => {
  return (
    <Container>
      <button className="arrow arrow-left">
        <Image src={Arrow} alt="left arrow" width={20} height={20} />
      </button>
      <TextL1 nowrap>Page </TextL1>
      <TextL1 color="gradient">1 of 3</TextL1>
      <button className="arrow arrow-right">
        <Image src={Arrow} alt="right arrow" width={20} height={20} />
      </button>
    </Container>
  );
};

export default Pager;
