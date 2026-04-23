"use client";

import { DeputatCard } from "@/components/deputat-card";
import { chamberPeople } from "@/shared/const/mock/chamberPeople.mock";
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
          <div className="flex flex-col gap-6 md:gap-10">
            <Typography variant="header-m-caps" tag="h2">
              Председатель
            </Typography>

            <div className="flex flex-col gap-4">
              <DeputatCard
                position={chamberPeople.chairman.position}
                fullFio={chamberPeople.chairman.fullFio}
                id={chamberPeople.chairman.id}
                image={chamberPeople.chairman.image}
                authorityDate={chamberPeople.chairman.authorityDate}
                committees={[]}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-10">
            <Typography variant="header-m-caps" tag="h2">
              ответственный секретарь
            </Typography>

            <div className="flex flex-col gap-4">
              <DeputatCard
                position={chamberPeople.responsibleSecretary.position}
                fullFio={chamberPeople.responsibleSecretary.fullFio}
                id={chamberPeople.responsibleSecretary.id}
                image={chamberPeople.responsibleSecretary.image}
                authorityDate={chamberPeople.responsibleSecretary.authorityDate}
                committees={[]}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-10">
            <Typography variant="header-m-caps" tag="h2">
              заместители председателя
            </Typography>

            <div className="flex flex-col gap-4">
              {chamberPeople.deputyChairmen.map((deputyChairman) => (
                <DeputatCard
                  key={deputyChairman.id}
                  position={deputyChairman.position}
                  fullFio={deputyChairman.fullFio}
                  id={deputyChairman.id}
                  image={deputyChairman.image}
                  authorityDate={deputyChairman.authorityDate}
                  committees={deputyChairman.committees}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { StructurePage };
