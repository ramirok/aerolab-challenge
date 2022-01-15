import Image from "next/image";
import styled from "styled-components";
import AerolabIcon from "../assets/aerolabIcon.svg";
import ArrowUpIcon from "../assets/arrowUpIcon.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 156px;
  height: 48px;
  border: 1px solid #dae4f2;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    border: 1px solid #7c899c;
  }
`;

const DesktopTextL1Default = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DropdownMenu = () => {
  return (
    <Container>
      <Image src={AerolabIcon} alt="aerolab" height={32} width={32} />
      <DesktopTextL1Default>10.000</DesktopTextL1Default>
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
