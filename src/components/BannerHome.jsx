import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../theme';

export default function BannerHome() {
  return (
    <BannerHomeStyled>
        <img src="/images/banner_image.jpg" alt="" />
    </BannerHomeStyled>
  )
}
const BannerHomeStyled = styled.div`
background: ${theme.colors.background};
  height: 200px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
 
  img{
    height: 100%;
  }
`;
