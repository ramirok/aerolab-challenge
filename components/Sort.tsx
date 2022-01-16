import React, { memo } from "react";
import styled from "styled-components";
import { TextL1 } from "./ui/TextComponents";
import { useEffect, useState } from "react";
import { OptionSelector } from "./ui/SelectorComponents";
import { Product } from "../types";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;

  & .sortOptions {
    display: flex;
    & > div {
      margin-left: 12px;
    }
  }
`;

const Sort = ({
  handleChangeSorting,
  currentSorting,
}: {
  handleChangeSorting: any;
  currentSorting: any;
}) => {
  const options = ["Name", "Lowest Price", "Highest Price"];
  const [selected, setSelected] = useState<string>();

  return (
    <Container>
      <TextL1>Sort By: </TextL1>
      <div className="sortOptions">
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
      </div>
    </Container>
  );
};

export default Sort;
