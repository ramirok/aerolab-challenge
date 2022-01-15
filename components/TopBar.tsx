import Image from "next/image";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import DropdownMenu from "./DropdownMenu";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 128px;
`;

const TopBar = () => {
  return (
    <Container>
      <Image src={Logo} alt="logo" />
      <DropdownMenu />
    </Container>
  );
};

export default TopBar;
