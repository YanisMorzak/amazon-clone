import React from "react";
import { styled } from "styled-components";

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <img src="/images/amazon.png" alt="logo amazon" />
      <div className="left-text">
        <div className="left-text-1">Deliver to</div>
        <div className="left-text-2">United Kingdom</div>
      </div>
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.div`
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
`;
