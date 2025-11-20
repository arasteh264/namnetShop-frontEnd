"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderSwiperProps {
  items: any[];
  CardComponent: React.ComponentType<any>; // کامپوننت کارت
  swiperProps?: any;
}

export default function SliderSwiper({ items, CardComponent, swiperProps }: SliderSwiperProps) {
  return (
    <Swiper modules={[Navigation, Pagination]} {...swiperProps}>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <CardComponent product={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
