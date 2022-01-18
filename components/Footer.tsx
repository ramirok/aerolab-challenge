import Image from "next/image";
import styled from "styled-components";
import { TextL1 } from "./ui/TextComponents";
import GithubLogo from "../assets/github.svg";
import { useState } from "react";

const Container = styled.footer`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <a
        href="https://github.com/ramirok/aerolab-challenge"
        target="_blank"
        rel="noreferrer"
      >
        <TextL1 nowrap>
          <Image src={GithubLogo} alt="github" /> View this repository
        </TextL1>
      </a>
    </Container>
  );
};

export default Footer;
