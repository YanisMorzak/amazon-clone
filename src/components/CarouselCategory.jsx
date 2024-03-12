import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

export default function CarouselCategory() {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };
  return (
    <CarouselCategoryStyled>
      <div className="shop">Shop By Category</div>
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={2}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide onClick={() => searchCategory("Deals")}>
          <img src="/images/category_0.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Amazon")}>
          <img src="/images/category_1.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Fashion")}>
          <img src="/images/category_2.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Computers")}>
          <img src="/images/category_3.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Home")}>
          <img src="/images/category_4.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Mobiles")}>
          <img src="/images/category_5.jpg" />
        </SwiperSlide>
      </Swiper>
    </CarouselCategoryStyled>
  );
}

const CarouselCategoryStyled = styled.div`
  background: white;
  padding: 10px;
  margin-top: 15px;

  .shop {
    font-size: 21px;
    font-weight: bold;
    padding: 5px;
    margin-bottom: 8px;
  }

  img {
    cursor: pointer;
    padding: 0 50px;
  }
`;
