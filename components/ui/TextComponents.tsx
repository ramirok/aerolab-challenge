import styled from "styled-components";
interface TextProps {
  color?: "black" | "gray" | "white" | "gradient";
  nowrap?: boolean;
  allCaps?: boolean;
}

export const TextL1 = styled.div<TextProps>`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color }) =>
    color == "black" ? '"#252F3D"' : color === "white" ? "white" : "#7c899c"};

  ${({ color }) =>
    color === "gradient"
      ? "background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"
      : ""}

  white-space: ${({ nowrap }) => (nowrap ? "pre" : "")};

  ${({ allCaps }) =>
    allCaps ? "text-transform: uppercase;letter-spacing: 4px;" : ""}
`;

export const TextL2 = styled(TextL1)`
  font-size: 14px;
  line-height: 150%;
  ${({ allCaps }) =>
    allCaps ? "text-transform: uppercase;letter-spacing: 1px;" : ""}
`;
