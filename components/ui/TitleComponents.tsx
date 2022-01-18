import styled from "styled-components";

interface TitleProps {
  color?: "gradient";
}

export const TitleL1 = styled.div<TitleProps>`
  font-family: "Montserrat", sans-serif;
  font-size: 200px;
  font-weight: 900;
  line-height: 80%;
  letter-spacing: 0;
  text-transform: uppercase;
  width: min-content;
  white-space: pre;
  display: inline-block;
  ${({ color }) =>
    color === "gradient"
      ? "background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;"
      : "color: #252f3d"};
`;

export const TitleL2 = styled(TitleL1)`
  font-size: 48px;
`;

export const TitleL3 = styled(TitleL1)`
  font-size: 32px;
  line-height: 100%;
`;
