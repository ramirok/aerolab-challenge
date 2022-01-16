import styled from "styled-components";
import { TextL1 } from "./TextComponents";

const ButtonStyles = styled.button`
  border: 0;
  border-radius: ${({ secondary }: { secondary?: boolean }) =>
    secondary ? "16px" : "24px"};
  height: ${({ secondary }) => (secondary ? "50px" : "80px")};
  padding: 0 35px;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.1s linear;
  cursor: pointer;

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
    <TextL1 color="white" nowrap>
      {props.children}
    </TextL1>
  </ButtonStyles>
);
