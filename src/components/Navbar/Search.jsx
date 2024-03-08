import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Search() {
  return (
    <SearchStyled>
      <select className="select">
        <option>All Items</option>
        <option>Deals</option>
        <option>Amazon</option>
        <option>Fashion</option>
        <option>Home</option>
      </select>
      <input type="text" className="input" />
      <div className="button-container">
        <button className="button">
          <MagnifyingGlassIcon />
        </button>
      </div>
    </SearchStyled>
  );
}

const SearchStyled = styled.div`
  background: ${theme.colors.yellow};
  width: 100%;
  height: 65%;
  border-radius: 4px;
  display: flex;
  justify-content: left;
  align-items: center;

  .select {
    height: 100%;
    width: 20%;
    background: rgb(230, 230, 230);
    border: 1px solid rgb(205, 205, 205);
    border-radius: 4px;
    padding-left: 8px;
  }

  .input {
    height: 100%;
    flex: 1;
    border: none;
  }

  .button-container {
    width: 48px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      background: transparent;
      border: none;
      color: rgb(51, 51, 51);
      height: 27px;
      width: 27px;
    }
  }
`;
