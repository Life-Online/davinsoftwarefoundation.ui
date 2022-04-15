import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperControls from "../shared/SwiperControls";
import ViewMoreCard from "./ViewMoreCard";

import "swiper/css";

function SwiperSlider({
  carouselList,
  link,
}: {
  carouselList: JSX.Element[];
  link: string;
}) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.1}
      breakpoints={{
        480: {
          width: 480,
          slidesPerView: 1.25,
        },
        768: {
          width: 768,
          slidesPerView: 1.5,
        },
        992: {
          width: 922,
          slidesPerView: 2,
        },
        1200: {
          width: 922,
          slidesPerView: 2.5,
        },
      }}
    >
      <SwiperControls />
      {carouselList.map((ReactElement, id) => (
        <SwiperSlide className="" key={`item-${id}`}>
          {ReactElement}
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>
        <ViewMoreCard link={link} />
      </SwiperSlide> */}
    </Swiper>
  );
}

export default SwiperSlider;
