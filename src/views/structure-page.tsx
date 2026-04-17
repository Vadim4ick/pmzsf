"use client";

import { DeputatCard } from "@/components/deputat-card/deputat-card";
import { GetStructurePageQuery } from "@/shared/graphql/__generated__";
import { groupHierarchyMembers } from "@/shared/lib/hierarchy";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const StructurePage = ({
  structure,
}: {
  structure: GetStructurePageQuery["structure"];
}) => {
  const grouped = groupHierarchyMembers(structure.members);

  return (
    <section>
      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-4">
          <Typography variant="header-xxl" tag="h1">
            Структура
          </Typography>
          <Typography
            className="text-text-subtle"
            variant="subtitle-serif-l"
            tag="p"
          >
            Палаты молодых законодателей при Совете Федерации Федерального
            собрания Российской Федерации
          </Typography>
        </div>

        <div className="flex flex-col gap-16">
          {grouped.map((group) => (
            <DeputatCard
              key={group.roleKey}
              role={group.role}
              users={group.users}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { StructurePage };
