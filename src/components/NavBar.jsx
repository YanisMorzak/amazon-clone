import React from 'react'
import { styled } from 'styled-components';

export default function NavBar() {
  return (
    <NavBarStyled>
        <div className="container">
            <div>left</div>
            <div>middle</div>
            <div>right</div>
        </div>
    </NavBarStyled>
  )
}

const NavBarStyled = styled.header`
min-width: 1000px;

.container{
    display: flex;
}
  
`;
