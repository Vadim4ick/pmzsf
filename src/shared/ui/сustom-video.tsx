"use client";

import { useState, useRef, useEffect } from "react";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/lib/utils";
import { createPortal } from "react-dom";

interface CustomVideoProps {
  src: string;
  poster: string;
  title?: string;
  className?: string;
}

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Закрыть */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-4 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        <video
          ref={videoRef}
          src={src}
          controls
          className="w-full rounded-[12px]"
          style={{ maxHeight: "75vh" }}
        />
      </div>
    </div>,
    document.body,
  );
}

const CustomVideo = ({ src, poster, title, className }: CustomVideoProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Превью — кликабельная карточка */}
      <div
        className={cn(
          "group relative h-full w-full cursor-pointer overflow-hidden rounded-[12px]",
          className,
        )}
        onClick={() => setModalOpen(true)}
      >
        <img
          src={poster}
          alt={title ?? "video preview"}
          className="h-full w-full object-cover"
        />

        {/* Градиент */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #030816 0%, rgba(3,8,22,0) 51%)",
          }}
        />

        {/* Кнопка play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-white/30">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              style={{ marginLeft: 2 }}
            >
              <path d="M5 3.868C5 2.298 6.71 1.373 8.04 2.22l13.01 8.132a1.75 1.75 0 0 1 0 2.996L8.04 21.48C6.71 22.327 5 21.402 5 19.832V3.868Z" />
            </svg>
          </div>
        </div>

        {/* Заголовок */}
        {title && (
          <div className="absolute right-0 bottom-0 left-0 p-4">
            <Typography
              variant="serif-m"
              tag="p"
              className="line-clamp-2 text-white"
            >
              {title}
            </Typography>
          </div>
        )}
      </div>

      {modalOpen && (
        <VideoModal src={src} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export { CustomVideo };
