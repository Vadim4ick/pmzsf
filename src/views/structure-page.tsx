"use client";

import { MemberCard, STRUCTURE } from "@/modules/structure-page";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const StructurePage = () => {
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
          {STRUCTURE.map((group) => (
            <article
              key={group.section}
              className="flex flex-col gap-6 md:gap-10"
            >
              <Typography variant="header-m-caps" tag="h2">
                {group.section}
              </Typography>

              <div className="flex flex-col gap-4">
                {group.members.map((member) => (
                  <MemberCard key={member.name} {...member} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { StructurePage };
