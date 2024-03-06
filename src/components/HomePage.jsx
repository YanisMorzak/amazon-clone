import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../theme';
import Carousel from './Carousel';
import HomePageCard from './HomePageCard';

export default function HomePage() {
  return (
    <HomePageStyled>
        <div className="container">
            <h1>Amazon</h1>
            <Carousel />
            <div className="card">
                <HomePageCard title={"We have a big surprise !"} image={"/images/home_grid_1.jpg"} link={"See terms and conditions"}/>
            </div>
        </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
background: ${theme.colors.background};

.container{
    /* background: #c87dc8; */
    min-width: 1000px;
    max-width: 1500px;
    margin: 0 auto;

    .card{
        border: 1px solid red;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

  
`;
