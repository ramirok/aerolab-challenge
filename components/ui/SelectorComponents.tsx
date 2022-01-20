import React from "react";
import styled from "styled-components";
import { TextL1 } from "./TextComponents";
interface SelectorProps {
  active?: boolean;
  large?: boolean;
  onClick?: () => void;
  value: string;
  groupName: string;
}
export const OptionSelector = (props: SelectorProps) => (
  <OptionSelectorStyle {...props} htmlFor={props.value}>
    <TextL1 nowrap color={props.active ? "white" : "gradient"}>
      {props.value}
    </TextL1>
    <StyledInput
      name={props.groupName}
      value={props.value}
      type="radio"
      id={props.value}
    />
  </OptionSelectorStyle>
);

const StyledInput = styled.input`
  appearance: none;
  margin: 0;
  &:focus-visible {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 12px;
  }
`;

const OptionSelectorStyle = styled.label<SelectorProps>`
  position: relative;
  border-radius: 12px;
  border: 1px hidden transparent;
  background: ${({ active, theme }) =>
    active
      ? `linear-gradient(102.47deg, ${theme.colors.brand.gradientDefault[0]} -5.34%, ${theme.colors.brand.gradientDefault[1]} 106.58%)`
      : theme.colors.brand.light};
  height: ${({ large }) => (large ? "43px" : "35px")};
  width: ${({ large }) => (large ? "165px" : "85px")};
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    border: ${({ active, theme }) =>
      active ? "" : `1px solid ${theme.colors.neutrals[600]}`};
  }
`;
