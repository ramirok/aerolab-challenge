import Image from "next/image";
import styled from "styled-components";
import { Product } from "../../types";
import { Button } from "./ButtonComponents";
import { TextL1, TextL2 } from "./TextComponents";
import AerolabIconWhite from "../../assets/aerolabIconWhite.svg";
import { useState } from "react";
import { useUser } from "../../context/userContext";

interface ProductProps {
  product: Product;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 80px;

  & .card {
    background-color: white;
    margin-bottom: 16px;
    border-radius: 16px;
    border: 1px solid #dae4f2;
    transition: all 0.2s;
    overflow: hidden;

    &:hover {
      transform: scale(1.02);
      border: 1px solid #7c899c;
      border-radius: 16px;
    }

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
    }

    &__content {
      border-top: 1px solid #dae4f2;
      padding: 16px 24px;
    }
  }
`;

const ProductCard = ({ product }: ProductProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useUser();

  const redeemProduct = async (id: string) => {
    setIsLoading(true);
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/redeem",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUyZDZhMWJjNDgzYTAwMjE2ZGE5NjgiLCJpYXQiOjE2NDIyNTYwMzN9.VVA-ablaYVIMKITor6C3F5DnVb9CjfrD-egzU_mAwyY",
        },
        body: JSON.stringify({ productId: id }),
      }
    );
    if (response.ok) {
      user.addRemoveUserPoints(-product.cost);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <div className="card">
        <div className="card__img">
          <Image src={product.img.url} alt="product" width={280} height={200} />
        </div>
        <div className="card__content">
          <TextL1 color="black">{product.name}</TextL1>
          <TextL2 allCaps>{product.category}</TextL2>
        </div>
      </div>
      <Button
        secondary
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
            You need <Image src={AerolabIconWhite} alt="aerolab icon" />
            {" " + product.cost}
          </>
        ) : (
          <>
            Redeem for <Image src={AerolabIconWhite} alt="aerolab icon" />
            {" " + product.cost}
          </>
        )}
      </Button>
    </Container>
  );
};

export default ProductCard;
