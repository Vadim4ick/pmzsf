"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowBack } from "@/shared/icons/arrow-back";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";
import { GetNewsByIdQuery } from "@/shared/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";

// Должно совпадать с max-w вашего Container
const CONTAINER_MAX_W = 850;
const CONTAINER_PADDING = 16; // px-8 = 32px с каждой стороны
const SLIDE_HEIGHT = 520;

const NewsSlider = memo(
  ({ slider }: { slider: GetNewsByIdQuery["news_by_id"]["images"] }) => {
    const [offset, setOffset] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    // Считаем отступ слева = отступ контейнера от края экрана
    useEffect(() => {
      const calc = () => {
        const screenW = window.innerWidth;
        const containerW = Math.min(screenW, CONTAINER_MAX_W);
        const leftOffset = (screenW - containerW) / 2 + CONTAINER_PADDING;
        setOffset(leftOffset);
      };

      calc();
      window.addEventListener("resize", calc);
      return () => window.removeEventListener("resize", calc);
    }, []);

    return (
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            prevEl: ".swiper-btn-prev",
            nextEl: ".swiper-btn-next",
          }}
          slidesPerView="auto"
          spaceBetween={24}
          slidesOffsetBefore={offset}
          slidesOffsetAfter={offset}
          watchSlidesProgress
          className="w-full"
        >
          {slider.map((slide, idx) => (
            <SwiperSlide
              key={idx}
              // Первый слайд — ширина контейнера, остальные чуть уже (видно следующий)
              style={{
                width:
                  idx === 0
                    ? `min(${CONTAINER_MAX_W - CONTAINER_PADDING * 2}px, calc(100vw - ${CONTAINER_PADDING * 2}px))`
                    : `min(${CONTAINER_MAX_W - CONTAINER_PADDING * 2}px, calc(100vw - ${CONTAINER_PADDING * 2}px))`,
              }}
            >
              {({ isActive }) => (
                <div
                  className={`relative w-full overflow-hidden rounded-[12px] transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                  style={{ height: SLIDE_HEIGHT }}
                >
                  <Image
                    src={pathImage(slide.directus_files_id.id)}
                    alt={slide.directus_files_id.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки — позиционируем относительно правого края активного слайда */}
        <button
          className="swiper-btn-prev bg-background-primary hover:bg-background-accent group absolute z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full shadow-md transition-colors disabled:opacity-0"
          style={{
            top: SLIDE_HEIGHT / 2,
            left: offset + 20, // чуть заходит за левый край слайда
          }}
        >
          <ArrowBack className="transition-all group-hover:text-white" />
        </button>

        <button
          className="swiper-btn-next bg-background-primary hover:bg-background-accent group absolute z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full shadow-md transition-colors disabled:opacity-0"
          style={{
            top: SLIDE_HEIGHT / 2,
            right: offset + 20,
          }}
        >
          <ArrowBack className="rotate-180 transition-all group-hover:text-white" />
        </button>
      </div>
    );
  },
);

export { NewsSlider };

NewsSlider.displayName = "NewsSlider";
