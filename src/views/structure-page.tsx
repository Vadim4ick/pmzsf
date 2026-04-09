import { Pluce } from "@/shared/icons/pluce";
import { User } from "@/shared/icons/user";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const StructurePage = () => {
  return (
    <section>
      <Container className="flex flex-col gap-[56px]">
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
          <article className="flex flex-col gap-10">
            <Typography variant="header-m-caps" tag="h2">
              Председатель
            </Typography>

            <div className="bg-background-primary grid grid-cols-[225px_1fr_115px] gap-8 rounded-[12px] p-12">
              <div className="relative h-[224px] w-full overflow-hidden rounded-[6px]">
                <Image
                  src="/img/chairman.png"
                  fill
                  alt="chairman"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex max-w-[600px] flex-col gap-3">
                  <Typography variant="header-l" tag="h3">
                    Соболев Михаил Владимирович
                  </Typography>

                  <Typography variant="subtitle-serif-s" tag="p">
                    Депутат Совета депутатов Омарского сельского поселения
                    Мамадышского муниципального района Республики Татарстан
                  </Typography>
                </div>

                <Button className="w-fit">О персоне</Button>
              </div>

              <div className="flex flex-col items-end justify-between gap-4">
                <div className="flex flex-col items-end">
                  <Typography
                    className="text-text-secondary"
                    variant="body-s"
                    tag="p"
                  >
                    в полномочиях
                  </Typography>

                  <Typography variant="body-m-strong" tag="span">
                    с 07.11.2026
                  </Typography>
                </div>

                <Button size={"icon"} icon={<Pluce className="size-[20px]" />}>
                  asd
                </Button>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export { StructurePage };
