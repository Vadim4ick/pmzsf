import { memo } from "react";
import { VIDEO_ITEMS } from "../model/media.const";
import { CustomVideo } from "@/shared/ui/сustom-video";

const MediaTabVideo = memo(() => {
  return (
    <div className="max-mobile:grid-cols-1 max-mobile:gap-5 grid grid-cols-[repeat(auto-fill,minmax(630px,1fr))] gap-10">
      {VIDEO_ITEMS.map((item, idx) => (
        <article key={idx} className="h-[350px]">
          <CustomVideo
            src={item.src}
            poster={item.poster}
            title={item.title}
            className="h-full"
          />
        </article>
      ))}
    </div>
  );
});

export { MediaTabVideo };

MediaTabVideo.displayName = "MediaTabVideo";
