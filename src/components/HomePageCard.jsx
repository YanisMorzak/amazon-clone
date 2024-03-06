import React from 'react'
import { styled } from 'styled-components';

export default function HomePageCard({title, image, link}) {
  return (
    <HomePageCardStyled>
        <div>{title}</div>
        <div><img src={image} /></div>
        <div>{link}</div>
    </HomePageCardStyled>
  )
}
const HomePageCardStyled = styled.div`
height: 420px;
background: white;
  
`;
