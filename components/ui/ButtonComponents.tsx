import styled from "styled-components";
import { Text } from "./TextComponents";

export const ButtonStyles = styled.button`
  border: 0;
  border-radius: 24px;
  height: 80px;
  width: 320px;
  padding: 0 35px;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  position: relative;
  z-index: 1;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1);
  }

  // transition for gradient background
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 24px;
    background: linear-gradient(102.47deg, #1667d9 -5.34%, #f279f2 106.58%);
    z-index: -1;
    transition: opacity 0.1s linear;
    opacity: 0;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const Button = (props: {
  children: React.ReactNode;
  secondary?: boolean;
}) => (
  <ButtonStyles {...props}>
    <Text white>{props.children}</Text>
  </ButtonStyles>
);
