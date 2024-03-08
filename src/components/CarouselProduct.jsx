import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function CarouselProduct() {
  return (
    <CarouselProductStyled>
      <div className="title">Best Sellers</div>
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product`}>
              <img src={`/images/product_${i}_small.jpg`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselProductStyled>
  );
}

const CarouselProductStyled = styled.div`
  background: white;
  padding: 10px;
  margin-top: 15px;

  .title {
    font-size: 21px;
    font-weight: bold;
    padding: 5px;
    margin-bottom: 8px;
  }

  img {
    padding: 0 60px;
  }
`;
