import React from "react";
import styled from "styled-components";

interface TitleProps {
  color?: "gradient";
  as?: "h1" | "h2" | "h3";
}

// TITLE L1
export const TitleL1 = styled.h1<TitleProps>`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 96px;
  font-weight: 900;
  line-height: 80%;
  letter-spacing: 0;
  text-transform: uppercase;
  width: min-content;
  white-space: pre;
  display: inline-block;
  ${({ color, theme }) =>
    color === "gradient"
      ? `background: linear-gradient(102.47deg, ${theme.colors.brand.gradientDefault[0]} -5.34%, ${theme.colors.brand.gradientDefault[1]} 106.58%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;`
      : `color: ${theme.colors.neutrals[900]}`};

  @media screen and (min-width: 1025px) {
    font-size: 200px;
  }
`;

// TITLE L2
const TitleL2Styles = styled(TitleL1)`
  font-size: 32px;
  @media screen and (min-width: 1025px) {
    font-size: 48px;
  }
`;

export const TitleL2: React.FunctionComponent<TitleProps> = (props) => (
  <TitleL2Styles as={props.as || "h2"} {...props}>
    {props.children}
  </TitleL2Styles>
);

// TITLE L3

const TitleL3Styles = styled(TitleL1)`
  font-size: 24px;
  line-height: 100%;
  @media screen and (min-width: 1025px) {
    font-size: 32px;
  }
`;

export const TitleL3: React.FunctionComponent<TitleProps> = (props) => (
  <TitleL3Styles as={props.as || "h3"} {...props}>
    {props.children}
  </TitleL3Styles>
);
