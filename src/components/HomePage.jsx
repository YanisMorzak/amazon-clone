import React, { useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../theme';
import Carousel from './Carousel';
import HomePageCard from './HomePageCard';
import { dataCardHome } from '../enums/dataCard';
import CarouselCategory from './CarouselCategory';
import CarouselProduct from './CarouselProduct';

export default function HomePage() {
    const [cardData, setcardData] = useState(dataCardHome)
  return (
    <HomePageStyled>
        <div className="container">
            <h1>Amazon</h1>
            <Carousel />
            <div className="card">
                {cardData && cardData.map((card) => {
                    return <HomePageCard key={card.id} title={card.title} image={card.imageSource} link={card.link}/>
                })}
                
            </div>
            <CarouselProduct />
            <CarouselCategory />
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin: -100px 20px 0 20px;
    }
}

  
`;
