import React from "react";
import styled from "styled-components";
import { TextL1 } from "./ui/TextComponents";
import { OptionSelector } from "./ui/SelectorComponents";

interface SortProps {
  handleChangeSorting: (value: string) => void;
  currentSorting: string;
}

const Sort = ({ handleChangeSorting, currentSorting }: SortProps) => {
  const options = ["Name", "Lowest Price", "Highest Price"];

  return (
    <StyledSortContainer>
      <TextL1>Sort By: </TextL1>
      <StyledSortOptions className="sortOptions">
        {options.map((option) => (
          // <div
          //   key={option}
          //   onClick={() => {
          //     handleChangeSorting(option);
          //   }}
          // >
          <OptionSelector
            large
            active={currentSorting === option}
            key={option}
            onClick={() => {
              handleChangeSorting(option);
            }}
          >
            {option}
          </OptionSelector>
          // </div>
        ))}
      </StyledSortOptions>
    </StyledSortContainer>
  );
};

export default Sort;

// styles
const StyledSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  @media screen and (min-width: 769px) {
    width: 66%;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    width: 50%;
  }
`;

const StyledSortOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }

  & > button {
    width: 100%;
    margin-bottom: 12px;
    @media screen and (min-width: 769px) {
      margin-left: 12px;
    }

    @media screen and (min-width: 1025px) {
      margin-bottom: 0px;
    }
  }
`;
