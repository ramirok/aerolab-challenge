import styled from "styled-components";

interface SpinnerProps {
  color?: "light" | "dark";
}

const Container = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: 25px;
  height: 25px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    // margin: 8px;
    margin: auto;
    border: 3px solid ${({ color }) => (color === "dark" ? "#7C899C" : "white")};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => (color === "dark" ? "#7C899C" : "white")}
      transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = (props: SpinnerProps) => {
  return (
    <Container {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default Spinner;
