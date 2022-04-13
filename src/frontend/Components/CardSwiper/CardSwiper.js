import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "./CardSwiper.css";

import { VideoCard } from "../../index";
SwiperCore.use([Autoplay, Navigation, Pagination, Controller, Thumbs]);
const CardSwiper = () => {
  return (
    <div className="card-swiper-container">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
      >
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <VideoCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { CardSwiper };
