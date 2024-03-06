import React from 'react'
import { styled } from 'styled-components';

export default function HomePageCard({title, image, link}) {
  return (
    <HomePageCardStyled>
        <div className='title'>{title}</div>
        <div className='image'><img src={image} /></div>
        <div className='link'>{link}</div>
    </HomePageCardStyled>
  )
}
const HomePageCardStyled = styled.div`
height: 420px;
background: white;
margin: 10px;

.title{
    font-size: 21px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
}

.image{
    height: 300px;
    margin: 10px;

    img{
        border-radius: 3px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.link{
    font-size: 13px;
    margin-left: 10px;
}
  
`;
