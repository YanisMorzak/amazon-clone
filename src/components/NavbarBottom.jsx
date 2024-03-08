import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";

export default function NavbarBottom() {
  return (
    <NavbarBottomStyled>
      <span>Todays Deals</span>
      <span>Customer Service</span>
      <span>Registry</span>
      <span>Gift Cards</span>
      <span>Best Sell</span>
    </NavbarBottomStyled>
  );
}

const NavbarBottomStyled = styled.div`
  background: ${theme.colors.light_blue};
  height: 35px;
  padding-left: 20px;
  display: flex;
  align-items: center;

  span {
    margin-right: 0.75rem;
    font-size: 16px;
  }
`;
