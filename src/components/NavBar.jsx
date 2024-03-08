import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import NavbarLeftSide from "./NavbarLeftSide";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="container">
        <NavbarLeftSide />
        <div className="search">
          <Search />
        </div>
        <div className="right">
          <div className="right-l-text">
            <div className="right-l-text-1">Hello, Sign In</div>
            <div className="right-l-text-2">Accounts & List</div>
          </div>
          <div className="right-r-text">
            <div className="right-r-text-1">Returns</div>
            <div className="right-r-text-2">& Orders</div>
          </div>
          <div className="icon">
            <ShoppingCartIcon className="img" />
            <div>Cart</div>
          </div>
        </div>
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
    .right {
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      .right-l-text {
        padding-left: 15px;
        padding-right: 15px;

        .right-l-text-1 {
          font-size: 14px;
        }
        .right-l-text-2 {
          font-size: 16px;
          font-weight: bold;
        }
      }
      .right-r-text {
        padding-left: 15px;
        padding-right: 15px;

        .right-r-text-1 {
          font-size: 14px;
        }
        .right-r-text-2 {
          font-size: 16px;
          font-weight: bold;
        }
      }
      .icon {
        display: flex;
        align-items: end;

        .img {
          height: 48px;
          width: 48px;
        }
        span {
          font-size: 16px;
          font-weight: bold;
        }
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
