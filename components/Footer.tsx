import Image from "next/image";
import styled from "styled-components";
import { TextL1 } from "./ui components/TextComponents";
import GithubLogo from "../assets/github.svg";

const Footer = () => {
  return (
    <StyledContainer>
      <a
        href="https://github.com/ramirok/aerolab-challenge"
        target="_blank"
        rel="noreferrer"
      >
        <TextL1 nowrap>
          <Image src={GithubLogo} alt="github" /> View this repository
        </TextL1>
      </a>
    </StyledContainer>
  );
};

export default Footer;

const StyledContainer = styled.footer`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
