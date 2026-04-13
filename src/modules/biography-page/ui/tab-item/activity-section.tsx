import { Typography } from "@/shared/ui/typography";
import { ActivityGroup } from "../../model/types";

export const ActivitySection = ({ groups }: { groups: ActivityGroup[] }) => (
  <div className="flex flex-col gap-10">
    {groups.map((group) => (
      <div key={group.heading} className="flex flex-col gap-2">
        <Typography variant="header-l" tag="p">
          {group.heading}
        </Typography>

        <div className="flex flex-col">
          {group.items.map((item, i) => (
            <div
              key={i}
              className="border-border-secondary max-mobile:flex-col max-mobile:gap-2 flex items-center justify-between gap-8 border-b py-6"
            >
              <Typography
                variant="body-serif"
                className="text-text-subtle max-w-[600px]"
                tag="p"
              >
                {item.title}
              </Typography>

              <Typography variant="header-s" className="shrink-0" tag="span">
                {item.period}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
