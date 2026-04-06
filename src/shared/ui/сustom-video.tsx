"use client";

import { useState, useRef } from "react";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/lib/utils";

interface CustomVideoProps {
  src: string;
  poster: string;
  title?: string;
  className?: string;
}

const CustomVideo = ({ src, poster, title, className }: CustomVideoProps) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-[12px]",
        className,
      )}
      onClick={handlePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        // controls={playing}
        onEnded={handleEnded}
        className="h-full w-full object-cover"
      />

      {/* Оверлей */}
      {/* <div className="absolute inset-0 bg-[#030816]/30" /> */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          playing && "opacity-0",
        )}
        style={{
          background: "linear-gradient(to top, #030816 0%, rgba(3,8,22,0) 51%)",
        }}
      />

      {/* Кнопка play */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100",
        )}
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-white/30">
          {playing ? (
            // Пауза
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="3" width="4" height="18" rx="1" />
              <rect x="15" y="3" width="4" height="18" rx="1" />
            </svg>
          ) : (
            // Плей — чуть сдвинут вправо для оптического баланса
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              style={{ marginLeft: 2 }}
            >
              <path d="M5 3.868C5 2.298 6.71 1.373 8.04 2.22l13.01 8.132a1.75 1.75 0 0 1 0 2.996L8.04 21.48C6.71 22.327 5 21.402 5 19.832V3.868Z" />
            </svg>
          )}
        </div>
      </div>

      {/* Заголовок снизу */}
      {title && (
        <div
          className={cn(
            "absolute right-0 bottom-0 left-0 p-6",
            playing && "opacity-0",
          )}
        >
          <Typography
            variant="serif-m"
            tag="p"
            className="line-clamp-3 text-white"
          >
            {title}
          </Typography>
        </div>
      )}
    </div>
  );
};

export { CustomVideo };
