import styled from "styled-components";
import { TextL1 } from "./TextComponents";

interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  disabled?: boolean;
  $loading?: boolean;
  onClick?: () => void;
  color?: "black" | "gray" | "white" | "gradient";
}

const ButtonStyles = styled.button<ButtonProps>`
  border: 0;
  border-radius: ${({ secondary }) => (secondary ? "16px" : "24px")};
  height: ${({ secondary }) => (secondary ? "50px" : "64px")};
  padding: 0 35px;

  background: ${({ $loading, theme }) =>
    $loading
      ? "linear-gradient(102.47deg, rgba(23, 111, 235, 0.7) -5.34%, rgba(255, 128, 255, 0.7) 106.58%);"
      : `linear-gradient(102.47deg, ${theme.colors.brand.gradientDefault[0]} -5.34%, ${theme.colors.brand.gradientDefault[1]} 106.58%);`}
    
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.1s linear;
  cursor: pointer;

  &:hover:enabled {
    transform: scale(1.02);
  }
  &:active:enabled {
    transform: scale(1);
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.neutrals[200]};
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
    background: linear-gradient(102.47deg, ${({ theme }) =>
      theme.colors.brand.gradientHover[0]} -5.34%, ${({ theme }) =>
  theme.colors.brand.gradientHover[1]} 106.58%);
    z-index: -1;
    transition: opacity 0.1s linear;
    opacity: 0;
  }
  &:hover:enabled::after {
    opacity: 1;
  }


    @media screen and (min-width: 1025px) {
    height: ${({ secondary }) => (secondary ? "50px" : "80px")};
  }
`;

export const Button = (props: ButtonProps) => (
  <ButtonStyles {...props}>
    <TextL1 color={props.disabled ? "gray" : props.color} nowrap>
      {props.children}
    </TextL1>
  </ButtonStyles>
);
