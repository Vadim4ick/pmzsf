"use client";

import { DeputatCard } from "@/components/deputat-card";
import { SearchInput } from "@/components/search-inp";
import { experts } from "@/shared/const/mock/chamberPeople.mock";
import { pathImage } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const ExpertAdvicePage = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10">
          <Typography variant="header-xxl" tag="h1">
            Экспертный совет
          </Typography>

          <SearchInput
            placeholder="Введите Фалимию члена совета"
            onChange={() => {}}
            value=""
          />
        </div>

        <div className="flex flex-col gap-16 pt-10">
          {/* {grouped.map((group) => (
            <DeputatCard
              key={group.roleKey}
              role={group.role}
              users={group.users}
            />
          ))} */}

          <div className="flex flex-col gap-6 md:gap-10">
            <Typography variant="header-m-caps" tag="h2">
              Председатель
            </Typography>

            <div className="flex flex-col gap-4">
              <DeputatCard
                position={experts.chairman.position}
                fullFio={experts.chairman.fullFio}
                id={experts.chairman.id}
                image={experts.chairman.image}
                authorityDate={experts.chairman.authorityDate}
                committees={[]}
                experts={true}
              />
            </div>
          </div>
        </div>

        {experts.members.length > 0 && (
          <div className="flex flex-col gap-10 pt-16">
            <Typography variant="header-m-caps" tag="h3">
              Члены совета
            </Typography>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(296px,1fr))] gap-10">
              {experts.members.map((item) => (
                <article
                  key={item.id}
                  className="border-border-secondary flex flex-col gap-4 border-b pb-10"
                >
                  <div className="relative h-[296px] w-full overflow-hidden rounded-[6px]">
                    <Image
                      src={item.image}
                      fill
                      alt={item.fullFio}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography variant="header-s" tag="p">
                      {item.fullFio}
                    </Typography>

                    <Typography
                      className="text-text-subtle"
                      variant="subtitle-serif-s"
                      tag="p"
                    >
                      {item.position}
                    </Typography>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export { ExpertAdvicePage };
