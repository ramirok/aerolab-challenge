import Image from "next/image";
import styled from "styled-components";
import AerolabIcon from "../assets/aerolabIcon.svg";
import ArrowUpIcon from "../assets/arrowUpIcon.svg";
import { Text, TextGradient } from "./ui/TextComponents";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 156px;
  height: 48px;
  border: 1px solid #dae4f2;
  border-radius: 16px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    border: 1px solid #7c899c;
  }
`;

const DropdownMenu = () => {
  return (
    <Container>
      <Image src={AerolabIcon} alt="aerolab" height={32} width={32} />
      <TextGradient>10.000</TextGradient>
      <Image
        src={ArrowUpIcon}
        alt="arrow"
        height={7.5}
        width={15}
        className="arrowIcon"
      />
    </Container>
  );
};

export default DropdownMenu;
