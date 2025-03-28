'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCreative,
} from 'swiper/modules'

export default function Gallery({ pictures }: { pictures: string[] }) {
  return (
    <div style={{ width: '100%' }}>
      <Swiper
        effect={'creative'}
        pagination={true}
        loop={true}
        autoHeight={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative, Pagination, Navigation]}
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index}>
            <img
              src={picture}
              alt={`Gallery image ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
