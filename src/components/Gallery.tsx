'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Autoplay, EffectCreative } from 'swiper/modules'

export default function Gallery() {
  return (
    <div style={{ width: '100%' }}>
      <Swiper
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative]}
      >
        <SwiperSlide>
          <img src="/URI-E-board.JPG" alt="URI E-board" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Mikhail_and_Nizhyn_Mayor.png"
            alt="Mikhail and Nizhyn Mayor"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Mikhail_and_Gainesville_Mayor.jpg"
            alt="Mikhail and Gainesville Mayor"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/URI-Logo.png" alt="URI Logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
