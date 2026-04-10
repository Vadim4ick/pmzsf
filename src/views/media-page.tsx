"use client";

import { MediaTab, MediaTabHeader, MediaTabPhoto } from "@/modules/media-page";
import { MediaTabVideo } from "@/modules/media-page/ui/media-tab-video";
import { Container } from "@/shared/ui/container";
import { memo, useState } from "react";

const MediaPage = memo(() => {
  const [activeTab, setActiveTab] = useState<MediaTab>("photo");

  return (
    <section>
      <Container className="flex flex-col gap-10">
        <MediaTabHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "photo" && <MediaTabPhoto />}

        {activeTab === "video" && <MediaTabVideo />}
      </Container>
    </section>
  );
});

export { MediaPage };

MediaPage.displayName = "MediaPage";
