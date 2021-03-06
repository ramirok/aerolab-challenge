import Image from "next/image";
import styled from "styled-components";
import { Product } from "../../types";
import { Button } from "../ui components/ButtonComponents";
import { TextL1, TextL2 } from "../ui components/TextComponents";
import { useState } from "react";
import { useUser } from "../../context/userContext";
import toasts from "../../lib/Toasts";
import AerolabIconSvg from "../../assets/AerolabIconSvg";
import { Post } from "../../lib/FetchService";

interface ProductProps {
  product: Product;
}
const ProductCard = ({ product }: ProductProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useUser();

  const redeemProduct = async (id: string) => {
    setIsLoading(true);
    const response = await Post("redeem", { productId: id });
    if (response.success) {
      user.addRemoveUserPoints(-product.cost);
      toasts.success(product.name);
    } else {
      toasts.fail("There was a problem with the transaction");
    }
    setIsLoading(false);
  };

  return (
    <StyledContainer>
      <StyledProductCard>
        <div className="card__img">
          <Image src={product.img.url} alt="product" width={280} height={200} />
        </div>
        <div className="card__content">
          <TextL1 color="black">{product.name}</TextL1>
          <TextL2 allCaps>{product.category}</TextL2>
        </div>
      </StyledProductCard>

      <Button
        secondary
        $loading={isLoading}
        disabled={user.userData.points < product.cost}
        color="white"
        onClick={() => {
          redeemProduct(product._id);
        }}
      >
        {isLoading ? (
          "Processing..."
        ) : user.userData.points < product.cost ? (
          <>
            You need <AerolabIconSvg color="white" bg="gray" />
            {" " + (product.cost - user.userData.points) + " more"}
          </>
        ) : (
          <>
            Redeem for <AerolabIconSvg bg="white" color="gradient" />
            {" " + product.cost}
          </>
        )}
      </Button>
    </StyledContainer>
  );
};

export default ProductCard;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 80px;
`;

const StyledProductCard = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[0]};
  margin-bottom: 16px;
  border-radius: 16px;
  border: 1px solid #dae4f2;
  transition: all 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    border: 1px solid ${({ theme }) => theme.colors.neutrals[600]};
    border-radius: 16px;
  }

  & .card {
    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 350px;
      overflow: hidden;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.2);
      }
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3OCA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MS43MzY1IDAuODA5MDlDNjEuMjgxMiAwLjAzNTQ1NzcgNjAuMjcyNiAtMC4yMjk3OSA1OS40ODQ0IDAuMjE3MDY0TDMyLjQ5NjUgMTUuNTA5M0MzMS44ODIzIDE1Ljg1NzYgMzEuNTYzNCAxNi41NTMgMzEuNzA1OCAxNy4yMzUyTDQwLjc4ODUgNjAuNzk3NkM0MC44MzIzIDYxLjAwNzQgNDAuNzQxNiA2MS4zMTcyIDQwLjYwNDEgNjEuNDY5M0wzOS41MDA2IDYyLjY5MDdDMzcuMjA2NSA2NS4yMzAzIDM1LjI2MyA2Ni42MDYxIDMxLjU2ODggNjYuNjA2MUMyNy40MjY3IDY2LjYwNjEgMjUuNDgyIDY0LjQ2MzIgMjIuNDAyNyA2MC42NzU3QzE4LjcyNSA1Ni4xNTI4IDE0LjE0ODkgNTAuNTI0MSAzLjAyMjczIDUwLjUyNDFIMi43NDc2QzEuMjMwMTUgNTAuNTI0MSAwIDUxLjczMTQgMCA1My4yMjA3QzAgNTQuNzEwMSAxLjIzMDE1IDU1LjkxNzQgMi43NDc2IDU1LjkxNzRIMy4wMjI3M0MxMS41MDI5IDU1LjkxNzQgMTQuNzEwNyA1OS44NjI2IDE4LjEwNzIgNjQuMDM5NkMyMS4xNDA4IDY3Ljc3MSAyNC41NzkzIDcyIDMxLjU2ODggNzJDMzcuNjAyNyA3MiA0MC45MjMxIDY5LjI0NTQgNDMuNjEyMyA2Ni4yNjkxTDUzLjUzMTQgNTUuMjkxM0M1My41MzE0IDU1LjI5MDcgNzcuMTIzNCAyOS4xNzkgNzcuMTIzNCAyOS4xNzlDNzcuNTkzOSAyOC42NTgxIDc3LjY3MjUgMjcuOSA3Ny4zMTc2IDI3LjI5NjZMNjEuNzM2NSAwLjgwOTA5WiIgZmlsbD0iI0U2RURGNyIvPgo8L3N2Zz4K");
      background-repeat: no-repeat;
      background-position: center;
    }

    &__content {
      border-top: 1px solid #dae4f2;
      padding: 16px 24px;
    }
  }
`;
