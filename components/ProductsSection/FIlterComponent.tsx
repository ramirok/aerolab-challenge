import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Arrow from "../../assets/arrowUpIcon.svg";
import { Product } from "../../types";
import { TextL1 } from "../ui components/TextComponents";

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
  // ----------------------------------------------------------------------------
  // push each product's category inside a Set, then gets an array from that set
  const categoriesSet = new Set<string>();
  products.forEach((product) => {
    categoriesSet.add(product.category);
  });
  const categories = ["All Products"].concat(Array.from(categoriesSet));
  // ---------------------------------------------------------------------------

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  return (
    <StyledContainer
      onKeyDown={(event) => {
        // -------------------------------------------------------------
        // this allows to navigate categories dropdown with arrow keys
        if (event.code === "Enter") {
          // return focus to menu button when pressing enter on a category
          if (menuIsVisible) {
            event.preventDefault();
            setMenuIsVisible(false);
            buttonRef.current!.focus();
          }
        }
        if (event.code === "ArrowDown") {
          // update filter and set focus on the next category
          event.preventDefault();
          if (!menuIsVisible) setMenuIsVisible(true);
          const currentIndex = categories.indexOf(currentFilter);
          const nextIndex =
            currentIndex === categories.length - 1
              ? currentIndex
              : currentIndex + 1;

          handleChangeFilter(categories[nextIndex], categories);
          const li = ulRef.current!.children[nextIndex] as HTMLElement;
          li.focus();
        }
        if (event.code === "ArrowUp") {
          // update filter and set focus on the previous category
          event.preventDefault();
          if (!menuIsVisible) setMenuIsVisible(true);
          const currentIndex = categories.indexOf(currentFilter);
          const prevIndex =
            currentIndex === 0 ? currentIndex : currentIndex - 1;

          handleChangeFilter(categories[prevIndex], categories);
          const li = ulRef.current!.children[prevIndex] as HTMLElement;
          li.focus();
        }
        // ------------------------------------------------------------
      }}
    >
      <TextL1>Filter By: </TextL1>

      <StyledDropDown>
        <button
          className="dropdown__button"
          onClick={() => setMenuIsVisible((prev) => !prev)}
          ref={buttonRef}
        >
          <TextL1>{currentFilter}</TextL1>
          <div className="dropdown__arrow">
            <Image src={Arrow} alt="down arrow" />
          </div>
        </button>

        <ul
          className={`dropdown__panel ${menuIsVisible && "active"}`}
          ref={ulRef}
        >
          {categories.map((item) => (
            <li
              key={item}
              onClick={() => {
                setMenuIsVisible(false);
                handleChangeFilter(item, categories);
              }}
              className={currentFilter === item ? "active" : ""}
              tabIndex={-1}
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
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 80%;
  }

  @media screen and (min-width: 769px) {
    width: 33%;
  }
  @media screen and (min-width: 1025px) {
    flex-direction: row;
    width: 25%;
    min-width: 400px;
    margin-right: 40px;
    padding-right: 40px;

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
  width: 100%;
  // margin-left: 16px;
  // margin-right: 40px;

  & .dropdown__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dae4f2;
    border-radius: 16px;
    padding: 16px 24px;
    cursor: pointer;
    transition: all 0.2s;

    width: 100%;
    &:hover {
      transform: scale(1.03);
      border: 1px solid ${({ theme }) => theme.colors.neutrals[600]};
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
    padding: 5px;
    transition: all 0.2s;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.neutrals[0]};
    &.active {
      visibility: visible;
      opacity: 1;
    }

    & li {
      margin: 5px;
      list-style: none;
      padding: 16px 24px;
      cursor: pointer;
      border-radius: 8px;
      &.active {
        background-color: ${({ theme }) => theme.colors.brand.light2};
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.neutrals[100]};
      }
    }
  }
`;
