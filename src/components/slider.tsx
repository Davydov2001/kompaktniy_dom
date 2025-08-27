'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FC } from 'react';
import info from './products/products';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SwiperCarousel: FC = () => {
  const { query } = useRouter();
  const index = Number(query.id);
  
  // Защитная проверка данных
  const images = info?.carousel?.[index] || [];

  if (!images.length) {
    return <div className="h-96 w-full bg-gray-100 flex items-center justify-center">
      No images found
    </div>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      className="mySwiper"
    >
      {images.map((src, i) => (
        <SwiperSlide key={`slide-${i}`}>
          <div className="relative_h-96_w-full">
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;