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
          <div
            key={option}
            onClick={() => {
              handleChangeSorting(option);
            }}
          >
            <OptionSelector large active={currentSorting === option}>
              {option}
            </OptionSelector>
          </div>
        ))}
      </StyledSortOptions>
    </StyledSortContainer>
  );
};

export default Sort;

// styles
const StyledSortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
`;

const StyledSortOptions = styled.div`
  display: flex;
  & > div {
    margin-left: 12px;
  }
`;
