import styled from "styled-components";
import ToolBar from "./ToolBar";
import { TitleL2 } from "./ui/TitleComponents";

const Container = styled.section`
  margin-top: 235px;
`;

const ProductsSection = () => {
  return (
    <Container>
      <TitleL2 color="gradient">tech</TitleL2>
      <TitleL2> products</TitleL2>

      <ToolBar />
    </Container>
  );
};

export default ProductsSection;
