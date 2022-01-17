import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../types";
import Filter from "./FIlter";
import Pager from "./Pager";
import Sort from "./Sort";
import ProductCard from "./ui/ProductCard";
import { TitleL2 } from "./ui/TitleComponents";

const Container = styled.section`
  margin-top: 235px;

  & .toolbar__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  }

  & .cards__container {
    display: grid;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 24px;
  }
`;

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const [currentFilter, setCurrentFilter] = useState<string>("All Products");
  const [currentSorting, setCurrentSorting] = useState<string>();

  const handleChangeFilter = (value: string, categories: string[]) => {
    setCurrentFilter(value);
    setFilteredProducts(
      value === categories[0]
        ? products
        : products.filter((product) => product.category === value)
    );
    handleChangeSorting("");
  };

  const handleChangeSorting = (value: string) => {
    const options = ["Name", "Lowest Price", "Highest Price"];
    setCurrentSorting(value);
    setFilteredProducts((prev) => {
      if (value === options[0]) {
        return [...prev].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (value === options[1]) {
        return [...prev].sort((a, b) => {
          return a.cost - b.cost;
        });
      }
      if (value === options[2]) {
        return [...prev].sort((a, b) => {
          return b.cost - a.cost;
        });
      }
      return prev;
    });
  };

  const fetchProducts = async () => {
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/products",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUyZDZhMWJjNDgzYTAwMjE2ZGE5NjgiLCJpYXQiOjE2NDIyNTYwMzN9.VVA-ablaYVIMKITor6C3F5DnVb9CjfrD-egzU_mAwyY",
        },
      }
    );
    const parsedResponse: Product[] = await response.json();
    setProducts(parsedResponse);
    setFilteredProducts(parsedResponse);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container>
      <TitleL2 color="gradient">tech</TitleL2>
      <TitleL2> products</TitleL2>
      <div className="toolbar__container">
        <Filter
          products={products}
          handleChangeFilter={handleChangeFilter}
          currentFilter={currentFilter}
        />
        <Sort
          handleChangeSorting={handleChangeSorting}
          currentSorting={currentSorting}
        />
        <Pager
          page={page}
          setPage={setPage}
          totalCount={filteredProducts.length}
          pageSize={16}
        />
      </div>

      <div className="cards__container">
        {filteredProducts.slice(16 * (page - 1), 16 * page).map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsSection;
