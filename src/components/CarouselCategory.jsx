import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { styled } from 'styled-components';

export default function CarouselCategory() {
  return (
    <CarouselCategoryStyled>
        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}>
                <SwiperSlide>
                     <img src="/images/category_0.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                     <img src="/images/category_1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                     <img src="/images/category_2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                     <img src="/images/category_3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                     <img src="/images/category_4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                     <img src="/images/category_5.jpg" />
                </SwiperSlide>
        </Swiper>
    </CarouselCategoryStyled>
  )
}

const CarouselCategoryStyled = styled.div`
background: white;
  
`;
