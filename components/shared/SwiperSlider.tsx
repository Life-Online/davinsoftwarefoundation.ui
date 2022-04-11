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
    <Swiper spaceBetween={40} slidesPerView={2.5}>
      <SwiperControls />
      {carouselList.map((ReactElement, id) => (
        <SwiperSlide className="pt-3" key={`item-${id}`}>
          {ReactElement}
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <ViewMoreCard link={link} />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperSlider;
