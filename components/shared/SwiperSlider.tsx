import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperControls from "../shared/SwiperControls";

import "swiper/css";

function SwiperSlider({ carouselList }: { carouselList: JSX.Element[] }) {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperControls />
      {carouselList.map((ReactElement, id) => (
        <SwiperSlide key={`item-${id}`}>{ReactElement}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperSlider;
