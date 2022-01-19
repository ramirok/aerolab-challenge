import { useEffect } from "react";
import styled from "styled-components";
import PageArrowIcon from "../assets/PageArrowIcon";
import { TextL1 } from "./ui/TextComponents";

interface PagerProps {
  totalCount: number;
  page: number;
  pageSize: number;
  setPage: (func: (prev: number) => number) => void;
}

const Pager = ({ totalCount, page, pageSize, setPage }: PagerProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev < totalPageCount ? prev + 1 : totalPageCount));
  };

  return (
    <StyledContainer>
      <StyledButtonArrow
        className="arrow-left"
        onClick={prevPage}
        disabled={page === 1}
      >
        <PageArrowIcon />
      </StyledButtonArrow>
      <TextL1 nowrap>Page </TextL1>
      <TextL1 color="gradient">
        {page} of {totalPageCount}
      </TextL1>
      <StyledButtonArrow
        className="arrow-right"
        onClick={nextPage}
        disabled={page === totalPageCount}
      >
        <PageArrowIcon />
      </StyledButtonArrow>
    </StyledContainer>
  );
};

export default Pager;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dae4f2;
  padding: 8px;
  border-radius: 12px;
  width: 80%;

  @media screen and (min-width: 769px) {
    width: 240px;
    margin-left: auto;
  }

  @media screen and (min-width: 1024px) {
  }
`;

const StyledButtonArrow = styled.button`
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

  &:hover:enabled {
    border: 1px solid #7c899c;
  }
  &:disabled {
    background-color: #e6edf7;
    & svg {
      stroke: #dae4f2;
    }
  }
  &.arrow-left {
    transform: rotate(90deg);
    margin-right: 20px;

    &:hover:enabled {
      transform: rotate(90deg) scale(1.03);
    }
  }
  &.arrow-right {
    transform: rotate(-90deg);
    margin-left: 20px;

    &:hover:enabled {
      transform: rotate(-90deg) scale(1.03);
    }
  }
`;
