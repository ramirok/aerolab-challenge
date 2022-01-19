import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../context/userContext";
import { Get } from "../lib/FetchService";
import { Product } from "../types";
import Filter from "./FIlter";
import Pager from "./Pager";
import Sort from "./Sort";
import ProductCard from "./ui/ProductCard";
import ProductCardSkeleton from "./ui/ProductCardSkeleton";
import { TextL1 } from "./ui/TextComponents";
import { TitleL2 } from "./ui/TitleComponents";

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]); //products fetched
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); //products to render
  const [page, setPage] = useState(1);
  const [currentSorting, setCurrentSorting] = useState<string>("");
  const [currentFilter, setCurrentFilter] = useState<string>("All Products");

  const user = useUser();
  const PRODUCTS_PER_PAGE = 16;

  const handleChangeFilter = (value: string, categories: string[]) => {
    setCurrentFilter(value);
    setPage(1);
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
    const response = await Get("products");
    if (response.success) {
      setProducts(response.data);
      setFilteredProducts(response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <StyledContainer id="products">
      <TitleL2 color="gradient">tech</TitleL2>
      <TitleL2> products</TitleL2>

      <StyledToolBar>
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
          pageSize={PRODUCTS_PER_PAGE}
        />
      </StyledToolBar>

      <StyledProductCards>
        {filteredProducts.length && !user.isLoading
          ? filteredProducts
              .slice(PRODUCTS_PER_PAGE * (page - 1), PRODUCTS_PER_PAGE * page)
              .map((product) => (
                <ProductCard product={product} key={product._id} />
              ))
          : Array.apply(null, Array(PRODUCTS_PER_PAGE)).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
      </StyledProductCards>

      <StyledBottomPager>
        <TextL1 color="gradient">
          {filteredProducts.length < PRODUCTS_PER_PAGE
            ? filteredProducts.length
            : PRODUCTS_PER_PAGE}{" "}
          of {filteredProducts.length} products
        </TextL1>
        <Pager
          page={page}
          setPage={setPage}
          totalCount={filteredProducts.length}
          pageSize={PRODUCTS_PER_PAGE}
        />
      </StyledBottomPager>
    </StyledContainer>
  );
};

export default ProductsSection;

const StyledContainer = styled.section`
  padding-top: 235px;
`;

const StyledToolBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  align-items: center;
  // justify-content: space-between;
  margin-top: 40px;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledProductCards = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(335px, 350px));
  grid-column-gap: 15px;
`;

const StyledBottomPager = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    width: 55%;
    margin-left: auto;
  }
`;
