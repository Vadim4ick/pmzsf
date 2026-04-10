import { Typography } from "@/shared/ui/typography";
import { MemberCard } from "./member-card";
import { memo } from "react";
import type { DeputatCard } from "@/shared/types/deputat.types";

const DeputatCard = memo(({ card }: { card: DeputatCard }) => {
  return (
    <article className="flex flex-col gap-6 md:gap-10">
      <Typography variant="header-m-caps" tag="h2">
        {card.section}
      </Typography>

      <div className="flex flex-col gap-4">
        {card.members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </article>
  );
});

export { DeputatCard };

DeputatCard.displayName = "DeputatCard";
