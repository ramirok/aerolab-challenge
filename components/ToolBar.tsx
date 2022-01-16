import styled from "styled-components";
import { TextL1 } from "./ui/TextComponents";
import Arrow from "../assets/arrowUpIcon.svg";
import Image from "next/image";
import { useState } from "react";
import { OptionSelector } from "./ui/SelectorComponents";
import Pager from "./Pager";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  & .filterSection {
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

  & .sortSection {
    display: flex;
    margin-left: 40px;
    & .sortOptions {
      display: flex;
      & > div {
        margin-left: 12px;
      }
    }
  }

  & .pagesSection {
    margin-left: auto;
  }
`;

const ToolBar = () => {
  const filters = [
    { value: "All Products" },
    { value: "Gaming" },
    { value: "Audio" },
    { value: "Smart Home" },
    { value: "Monitors & TV" },
  ];
  const [filter, setFilter] = useState(filters[0]);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <div className="filterSection">
        <TextL1>Filter By: </TextL1>
        <div className="dropdown">
          <div
            className="dropdown__button"
            onClick={() => setMenuIsVisible((prev) => !prev)}
          >
            <TextL1>{filter.value}</TextL1>
            <div className="dropdown__arrow">
              <Image src={Arrow} alt="down arrow" />
            </div>
          </div>
          <ul className={`dropdown__panel ${menuIsVisible && "active"}`}>
            {filters.map((item) => (
              <li
                key={item.value}
                onClick={() => {
                  setFilter(item);
                  setMenuIsVisible(false);
                }}
              >
                <TextL1>{item.value}</TextL1>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sortSection">
        <TextL1>Sort By: </TextL1>
        <div className="sortOptions">
          <OptionSelector large>Most Recent</OptionSelector>
          <OptionSelector large active>
            Lowest Price
          </OptionSelector>
          <OptionSelector large>Highest Price</OptionSelector>
        </div>
      </div>

      <div className="pagesSection">
        <Pager />
      </div>
    </Container>
  );
};

export default ToolBar;
