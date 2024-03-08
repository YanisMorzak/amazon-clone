import React from "react";
import { styled } from "styled-components";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function NavbarRightSide() {
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
`;
