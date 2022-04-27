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

import { useVideos } from "../../Contexts";
import { SliderVideoCard } from "../SliderVideoCard/SliderVideoCard";
SwiperCore.use([Autoplay, Navigation, Pagination, Controller, Thumbs]);
const CardSwiper = () => {
  const { videos } = useVideos();

  return (
    <div className="card-swiper-container">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          440: {
            width: 440,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        autoplay
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
