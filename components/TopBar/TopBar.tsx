import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import DropdownMenu from "./DropdownMenu";

const TopBar = () => {
  const containerRef = useRef(null);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    // detect when topbar gets pinned on scroll
    const bar = containerRef.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsPinned(!e.isIntersecting);
      },
      { threshold: 1, root: null, rootMargin: "0px" }
    );
    if (bar) {
      observer.observe(bar);
    }

    return () => {
      if (bar) observer.unobserve(bar);
    };
  }, [containerRef]);

  return (
    <StyledTopBar
      id="top-bar"
      ref={containerRef}
      className={isPinned ? "topBar-pinned" : ""}
    >
      <Link href="/">
        <a>
          <Image src={Logo} alt="logo" />
        </a>
      </Link>
      <DropdownMenu />
    </StyledTopBar>
  );
};

export default TopBar;

// styles
const StyledTopBar = styled.div`
  & a {
    border-radius: 12px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  position: sticky;
  top: -1px;
  z-index: 20;
  &:before {
    background-color: ${({ theme }) => theme.colors.neutrals[0]};
    content: "";
    position: absolute;
    height: 100%;
    border-radius: 24px;
    width: 100%;
    top: 10px;
    left: 0;
    z-index: -1;
  }
  &.topBar-pinned {
    &:before {
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      border: 1px solid #dae4f2;
    }
  }
`;
