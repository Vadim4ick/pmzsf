"use client";

import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import { useState } from "react";

type Tab = "photo" | "video";

const TABS: { id: Tab; label: string }[] = [
  { id: "photo", label: "Фото" },
  { id: "video", label: "Видео" },
];

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("photo");

  return (
    <section>
      <Container className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="cursor-pointer"
            >
              <Typography
                className={
                  activeTab === tab.id
                    ? "text-text-accent-hover"
                    : "text-text-secondary"
                }
                variant="header-l"
                tag="h3"
              >
                {tab.label}
              </Typography>
            </button>
          ))}
        </div>

        {activeTab === "photo" && <div>Фото контент</div>}

        {activeTab === "video" && <div>Видео контент</div>}
      </Container>
    </section>
  );
};

export { MediaPage };
