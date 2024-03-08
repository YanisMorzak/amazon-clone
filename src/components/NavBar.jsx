import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";
import Search from "./Search";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="container">
        <NavbarLeftSide />
        <div className="search">
          <Search />
        </div>
        <NavbarRightSide />
      </div>
      <div className="nav-bottom">
        <span>Todays Deals</span>
        <span>Customer Service</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Best Sell</span>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.header`
  min-width: 1000px;
  background: ${theme.colors.default};
  color: white;

  .container {
    height: 60px;
    display: flex;
    justify-content: space-between;

    .search {
      width: 55%;
      display: flex;
      justify-content: left;
      align-items: center;

      @media screen and (max-width: 1380px) {
        width: 45%;
      }
      @media screen and (max-width: 1200px) {
        width: 38%;
      }
    }
  }

  .nav-bottom {
    background: ${theme.colors.light_blue};
    height: 35px;
    padding-left: 20px;
    display: flex;
    align-items: center;

    span {
      margin-right: 0.75rem;
      font-size: 16px;
    }
  }
`;
