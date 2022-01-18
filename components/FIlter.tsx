import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Arrow from "../assets/arrowUpIcon.svg";
import { Product } from "../types";
import { TextL1 } from "./ui/TextComponents";

interface FilterProps {
  products: Product[];
  handleChangeFilter: any;
  currentFilter: any;
}

const Filter = ({
  products,
  handleChangeFilter,
  currentFilter,
}: FilterProps) => {
  // push each product's category inside a Set, then gets an array from that set
  const categoriesSet = new Set<string>();
  products.forEach((product) => {
    categoriesSet.add(product.category);
  });
  const categories = ["All Products"].concat(Array.from(categoriesSet));

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <StyledContainer>
      <TextL1>Filter By: </TextL1>

      <StyledDropDown>
        <div
          className="dropdown__button"
          onClick={() => setMenuIsVisible((prev) => !prev)}
        >
          <TextL1>{currentFilter}</TextL1>
          <div className="dropdown__arrow">
            <Image src={Arrow} alt="down arrow" />
          </div>
        </div>

        <ul className={`dropdown__panel ${menuIsVisible && "active"}`}>
          {categories.map((item) => (
            <li
              key={item}
              onClick={() => {
                setMenuIsVisible(false);
                handleChangeFilter(item, categories);
              }}
            >
              <TextL1>{item}</TextL1>
            </li>
          ))}
        </ul>
      </StyledDropDown>
    </StyledContainer>
  );
};

export default Filter;

const StyledContainer = styled.div`
   {
    display: flex;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      border-right: 2px solid #dae4f2;
    }
  }
`;
const StyledDropDown = styled.div`
  position: relative;
  margin-left: 16px;
  margin-right: 40px;

  & .dropdown__button {
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dae4f2;
    border-radius: 16px;
    padding: 16px 24px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.03);
      border: 1px solid #7c899c;
    }
  }

  & .dropdown__panel {
    visibility: hidden;
    max-height: 400px;
    overflow: auto;
    opacity: 0;
    position: absolute;
    border: 1px solid #dae4f2;
    border-radius: 8px;
    width: 100%;
    margin-top: 10px;
    padding: 0;
    transition: all 0.2s;
    z-index: 10;
    background-color: white;
    &.active {
      visibility: visible;
      opacity: 1;
    }

    & li {
      list-style: none;
      padding: 16px 24px;
      cursor: pointer;
      &:hover {
        background-color: #f5f9ff;
      }
    }
  }
`;
