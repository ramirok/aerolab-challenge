import styled from "styled-components";
interface TextProps {
  color?: "black" | "gray" | "white" | "gradient";
  nowrap?: boolean;
  allCaps?: boolean;
}

// TEXT L1
export const TextL1 = styled.p<TextProps>`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color, theme }) =>
    color == "black"
      ? theme.colors.neutrals[900]
      : color === "white"
      ? theme.colors.neutrals[0]
      : theme.colors.neutrals[600]};

  ${({ color, theme }) =>
    color === "gradient"
      ? `background: linear-gradient(102.47deg, ${theme.colors.brand.gradientDefault[0]} -5.34%, ${theme.colors.brand.gradientDefault[1]} 106.58%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`
      : ""}

  white-space: ${({ nowrap }) => (nowrap ? "pre" : "")};

  ${({ allCaps }) =>
    allCaps ? "text-transform: uppercase;letter-spacing: 4px;" : ""}

  @media screen and (min-width: 1025px) {
    font-size: 18px;
  }
`;

// TEXT L2
export const TextL2 = styled(TextL1)`
  font-size: 14px;
  line-height: 150%;
  ${({ allCaps }) =>
    allCaps ? "text-transform: uppercase;letter-spacing: 1px;" : ""}
`;
