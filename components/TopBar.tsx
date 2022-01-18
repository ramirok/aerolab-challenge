import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import DropdownMenu from "./DropdownMenu";

const Container = styled.div`
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
    background-color: white;
    content: "";
    position: absolute;
    height: 100%;
    border-radius: 24px;
    width: 100%;
    top: 10px;
    left: 0;
  }
  &.is-pinned {
    &:before {
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      border: 1px solid #dae4f2;
    }
  }
`;

const TopBar = () => {
  const containerRef = useRef(null);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsPinned(!e.isIntersecting);
      },
      { threshold: 1, root: null, rootMargin: "0px" }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current!);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return (
    <Container
      id="top-bar"
      ref={containerRef}
      className={isPinned ? "is-pinned" : "not-pinned"}
    >
      <Link href="/">
        <a>
          <Image src={Logo} alt="logo" />
        </a>
      </Link>
      <DropdownMenu />
    </Container>
  );
};

export default TopBar;
