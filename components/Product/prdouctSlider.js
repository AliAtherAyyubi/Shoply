"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { productImgs } from "../../app/utils/products";

export default function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="relative flex flex-col justify-center">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        
        className="mySwiper2 h-[40vh] w-[30vw]"
      >
        {productImgs.map((img, index) => (
          <SwiperSlide key={index} >
            <img src={img} className="size-full object-contain" alt={`Product Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-6"
      >
        {productImgs.map((img, index) => (
          <SwiperSlide key={index} className="!w-[40px] !h-[40px] cursor-pointer">
            <img 
              src={img} 
              className="w-full h-full object-cover rounded-md opacity-50 transition-opacity hover:opacity-100" 
              alt={`Product Image ${index + 1}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
