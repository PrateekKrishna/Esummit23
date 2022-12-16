import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
   
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/g1.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g2.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g3.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g4.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g5.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g6.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g7.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g8.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g9.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g10.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g11.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g12.JPG" alt="pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/g13.JPG" alt="pic" />
        </SwiperSlide>
        
      </Swiper>
      
    </>
  );
}
