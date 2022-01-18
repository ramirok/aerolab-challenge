import styled from "styled-components";
import PageArrowIcon from "../assets/PageArrowIcon";
import { TextL1 } from "./ui/TextComponents";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dae4f2;
  padding: 8px;
  border-radius: 12px;
  width: 240px;

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

    &:hover:enabled {
      border: 1px solid #7c899c;
    }
    &:disabled {
      background-color: #e6edf7;
      & svg {
        stroke: #dae4f2;
      }
    }
    &-left {
      transform: rotate(90deg);
      margin-right: 20px;

      &:hover:enabled {
        transform: rotate(90deg) scale(1.03);
      }
    }
    &-right {
      transform: rotate(-90deg);
      margin-left: 20px;

      &:hover:enabled {
        transform: rotate(-90deg) scale(1.03);
      }
    }
  }
`;

const Pager = ({
  totalCount,
  page,
  pageSize,
  setPage,
}: {
  totalCount: number;
  page: number;
  pageSize: number;
  setPage: (func: (prev: number) => number) => void;
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev < totalPageCount ? prev + 1 : totalPageCount));
  };

  return (
    <Container>
      <button
        className="arrow arrow-left"
        onClick={prevPage}
        disabled={page === 1}
      >
        <PageArrowIcon />
      </button>
      <TextL1 nowrap>Page </TextL1>
      <TextL1 color="gradient">
        {page} of {totalPageCount}
      </TextL1>
      <button
        className="arrow arrow-right"
        onClick={nextPage}
        disabled={page === totalPageCount}
      >
        <PageArrowIcon />
      </button>
    </Container>
  );
};

export default Pager;
