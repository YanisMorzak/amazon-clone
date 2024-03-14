import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";
import Search from "./Search";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";
import NavbarBottom from "./NavbarBottom";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="container-navbar">
        <NavbarLeftSide />
        <div className="search">
          <Search />
        </div>
        <NavbarRightSide />
      </div>
      <NavbarBottom />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.header`
  min-width: 1000px;
  background: ${theme.colors.default};
  color: white;

  .container-navbar {
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
`;
