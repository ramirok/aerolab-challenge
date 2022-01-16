import styled from "styled-components";
import { TextGradient, TextL1 } from "./TextComponents";

const OptionSelectorStyle = styled.div`
  border-radius: 12px;
  border: 1px hidden transparent;
  background: ${({ active }: { active?: boolean }) =>
    active
      ? "linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)"
      : "#E5F0FF"};
  width: min-content;
  min-width: 85px;
  height: 35px;
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
}) => (
  <OptionSelectorStyle {...props}>
    {props.active ? (
      <TextL1 color="white">{props.children}</TextL1>
    ) : (
      <TextGradient>{props.children}</TextGradient>
    )}
  </OptionSelectorStyle>
);
