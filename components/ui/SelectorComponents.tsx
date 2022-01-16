import styled from "styled-components";
import { TextL1 } from "./TextComponents";
interface SelectorProps {
  active?: boolean;
  large?: boolean;
}

const OptionSelectorStyle = styled.div<SelectorProps>`
  border-radius: 12px;
  border: 1px hidden transparent;
  background: ${({ active }) =>
    active
      ? "linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)"
      : "#E5F0FF"};
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
    border: ${({ active }) => (active ? "" : "1px solid #7c899c")};
  }
`;

export const OptionSelector = (props: {
  children: React.ReactNode;
  active?: boolean;
  large?: boolean;
}) => (
  <OptionSelectorStyle {...props}>
    <TextL1 color={props.active ? "white" : "gradient"} nowrap>
      {props.children}
    </TextL1>
  </OptionSelectorStyle>
);
