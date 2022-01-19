import styled from "styled-components";
import { TextL1 } from "./TextComponents";
interface SelectorProps {
  active?: boolean;
  large?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const OptionSelector = (props: SelectorProps) => (
  <OptionSelectorStyle {...props}>
    <TextL1 color={props.active ? "white" : "gradient"} nowrap>
      {props.children}
    </TextL1>
  </OptionSelectorStyle>
);

const OptionSelectorStyle = styled.div<SelectorProps>`
  border-radius: 12px;
  border: 1px hidden transparent;
  background: ${({ active, theme }) =>
    active
      ? `linear-gradient(102.47deg, ${theme.colors.brand.gradientDefault[0]} -5.34%, ${theme.colors.brand.gradientDefault[1]} 106.58%)`
      : theme.colors.brand.light};
  width: min-content;
  height: ${({ large }) => (large ? "43px" : "35px")};
  width: ${({ large }) => (large ? "165px" : "85px")};
  text-align: center;
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
