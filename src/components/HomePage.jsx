import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../theme';
import Carousel from './Carousel';

export default function HomePage() {
  return (
    <HomePageStyled>
        <div className="container">
            <h1>Amazon</h1>
            <Carousel />
        </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
background: ${theme.colors.background};

.container{
    background: #c87dc8;
    min-width: 1000px;
    max-width: 1500px;
    margin: 0 auto;
}

  
`;
