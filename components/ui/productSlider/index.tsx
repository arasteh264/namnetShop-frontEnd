"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
  items: any[];
  CardComponent: React.ComponentType<any>;
  rtl?: boolean; // گزینه برای RTL
}

export default function ProductSlider({ items, CardComponent, rtl = true }: ProductSliderProps) {
  return (
    <div dir={rtl ? "rtl" : "ltr"}> {/* اضافه کردن dir */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.2}
        spaceBetween={15}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView:3.5, spaceBetween:10 },
        }}
      >
        {items.map((item,index) => (
          <SwiperSlide key={index}>
            <CardComponent product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
