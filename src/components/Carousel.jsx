import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <CarouselStyled>
      <div className="container">
        <div className="swiper">
          <Swiper
            loop={true}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 4500,
            }}
          >
            <SwiperSlide>
              <img src="/images/carousel_1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/carousel_2.jpg" />
            </SwiperSlide>
            {/* <SwiperSlide>
                     <video controls muted="muted">
                        <source src='/images/carousel_vid.mp4' type='video/mp4'/>
                     </video>
                 </SwiperSlide> */}
            <SwiperSlide>
              <img src="/images/carousel_4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/carousel_5.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="gradient" />
      </div>
    </CarouselStyled>
  );
}

const CarouselStyled = styled.div`
  height: 500px;

  .swiper {
    height: 400px;

    img {
      width: 100%;
    }
  }
  .gradient {
    height: 200px;
    background: linear-gradient(to bottom, black, transparent);
  }
`;
