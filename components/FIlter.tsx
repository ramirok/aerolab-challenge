import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Arrow from "../assets/arrowUpIcon.svg";
import { Product } from "../types";
import { TextL1 } from "./ui/TextComponents";

const Container = styled.div`
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

    & .dropdown {
      position: relative;
      margin-left: 16px;
      margin-right: 40px;

      &__button {
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

      &__panel {
        visibility: hidden;
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
          &:hover {
            background-color: #f5f9ff;
          }
        }
      }
    }
  }
`;

const Filter = ({
  products,
  handleChangeFilter,
  currentFilter,
}: {
  products: Product[];
  handleChangeFilter: any;
  currentFilter: any;
}) => {
  const categoriesSet = new Set<string>();
  products.forEach((product) => {
    categoriesSet.add(product.category);
  });

  const filters = ["All Products"].concat(Array.from(categoriesSet));
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <TextL1>Filter By: </TextL1>
      <div className="dropdown">
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
          {filters.map((item) => (
            <li
              key={item}
              onClick={() => {
                setMenuIsVisible(false);
                handleChangeFilter(item, filters);
              }}
            >
              <TextL1>{item}</TextL1>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Filter;
