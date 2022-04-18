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

import { SliderVideoCard, useVideos } from "../../index";
SwiperCore.use([Autoplay, Navigation, Pagination, Controller, Thumbs]);
const CardSwiper = () => {
  const { videos } = useVideos();
  return (
    <div className="card-swiper-container">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
      >
        {videos.map((item) => {
          return (
            <SwiperSlide key={item.id} className="swiper-card">
              <SliderVideoCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export { CardSwiper };
