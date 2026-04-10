import { Expert } from "@/shared/types/expert.types";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const ExpertCard = ({ item }: { item: Expert }) => {
  return (
    <div className="border-border-secondary flex flex-col gap-4 border-b pb-10">
      <div className="relative h-[296px] w-full overflow-hidden rounded-[6px]">
        <Image src={item.img} fill alt={item.title} className="object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <Typography variant="header-s" tag="p">
          {item.title}
        </Typography>

        <Typography
          className="text-text-subtle"
          variant="subtitle-serif-s"
          tag="p"
        >
          {item.post}
        </Typography>
      </div>
    </div>
  );
};

export { ExpertCard };
