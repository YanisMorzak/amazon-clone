import React from "react";
import { styled } from "styled-components";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function NavbarRightSide() {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <NavbarRightSideStyled>
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
        <div className="number-container">
          <div className="number">{cart}</div>
        </div>
        <div>Cart</div>
      </div>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
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
    position: relative;
    display: flex;
    align-items: end;

    .img {
      height: 48px;
      width: 48px;
    }

    .number-container {
      .number {
        position: absolute;
        top: 25%;
        left: 30%;
        font-weight: bold;
        color: orange;
      }
    }
  }
`;
