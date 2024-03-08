import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./Search";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="container">
        <div className="left">
          <img src="/images/amazon.png" alt="logo amazon" />
          <div className="left-text">
            <div className="left-text-1">Deliver to</div>
            <div className="left-text-2">United Kingdom</div>
          </div>
        </div>
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
    </NavBarStyled>
  );
}

const NavBarStyled = styled.header`
  min-width: 1000px;
  background: ${theme.colors.default};
  color: white;
  height: 60px;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      margin-left: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 35px;
        margin: 2px;
      }

      .left-text {
        padding-left: 15px;
        padding-right: 15px;

        .left-text-1 {
          font-size: 14px;
        }
        .left-text-2 {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }

    .search {
      width: 60%;
      display: flex;
      justify-content: left;
      align-items: center;
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
`;
