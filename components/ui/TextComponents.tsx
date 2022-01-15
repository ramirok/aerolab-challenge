import styled from "styled-components";

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ white }: { white?: boolean }) => (white ? "white" : "#7c899c")};
`;

export const TextAllCaps = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const TextGradient = styled(Text)`
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
88;
