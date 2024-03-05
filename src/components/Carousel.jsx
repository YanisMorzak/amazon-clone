import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../theme';

export default function Carousel() {
  return (
    <CarouselStyled>Carousel</CarouselStyled>
  )
}

const CarouselStyled = styled.div`
background: ${theme.colors.yellow};
  
`;
