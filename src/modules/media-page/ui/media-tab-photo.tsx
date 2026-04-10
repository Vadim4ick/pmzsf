import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { memo } from "react";
import { PHOTO_ITEMS } from "../model/media.const";

const MediaTabPhoto = memo(() => {
  return (
    <div className="max-mobile:grid-cols-1 max-mobile:gap-5 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10">
      {PHOTO_ITEMS.map((item, idx) => (
        <article
          key={idx}
          className="border-border-secondary flex flex-col gap-4 border-b pb-5"
        >
          <div className="relative h-[240px] overflow-hidden rounded-[8px]">
            <Image src={item.src} alt="news" fill />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="subtitle-serif-l" tag="p">
              {item.title}
            </Typography>

            <Typography
              className="text-text-secondary"
              variant="body-s-strong"
              tag="span"
            >
              {item.date}
            </Typography>
          </div>
        </article>
      ))}
    </div>
  );
});

export { MediaTabPhoto };

MediaTabPhoto.displayName = "MediaTabPhoto";
