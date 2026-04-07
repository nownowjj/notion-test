'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { HospitalItem } from '@/hooks/useHospitalData';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function MainBanner({ data }: { data?: HospitalItem & { images: string[] } }) {
    if (!data || !data.imageUrl) return null;

    return (
        <section id="intro" className="relative w-full h-screen bg-white">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade" // 부드러운 교체 효과
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="w-full h-full"
                loop
            >
                {data.imageUrl.map((url, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">
                            <img
                                src={url}
                                alt={`${data.name} - ${idx}`}
                                className="w-full h-full object-cover fade-in-image" // ✅ 클래스 추가
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}