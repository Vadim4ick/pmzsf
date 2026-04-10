"use client";

import { Typography } from "@/shared/ui/typography";
import { MEDIA_TABS, MediaTab } from "../model/media.const";
import { DateRangePicker } from "@/shared/ui/date-range-picker";
import { memo, useState } from "react";
import { DateRange } from "react-day-picker";

const MediaTabHeader = memo(
  ({
    activeTab,
    setActiveTab,
  }: {
    activeTab: MediaTab;
    setActiveTab: (tab: MediaTab) => void;
  }) => {
    const [range, setRange] = useState<DateRange | undefined>(undefined);

    return (
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {MEDIA_TABS.map((tab) => (
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

        <DateRangePicker range={range} onSelect={setRange} />
      </div>
    );
  },
);

export { MediaTabHeader };

MediaTabHeader.displayName = "MediaTabHeader";
