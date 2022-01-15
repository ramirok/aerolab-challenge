import styled from "styled-components";

export const DesktopTitleL1Default = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 200px;
  font-weight: 900;
  line-height: 80%;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #252f3d;
  ${(props: { colored?: boolean }) =>
    props.colored
      ? "background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;"
      : ""};
`;
