"use client";
import { Pluce } from "@/shared/icons/pluce";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { useState } from "react";

const COMMITTEES = [
  {
    title:
      "Комитет по конституционному законодательству, правовым и судебным вопросам, развитию гражданского общества",
    person: "Криеренко Александр Валерьевич",
  },
  {
    title:
      "Комитет по федеративному устройству, региональной политике, местному самоуправлению",
    person: "Ромашенко Николай Владимирович",
  },
  {
    title: "Комитет по международным делам",
    person: "Денисюк Дмитрий Сергеевич",
  },
];

const StructurePage = () => {
  const [isOpen, setIsOpen] = useState(false);

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

            <div className="bg-background-primary flex flex-col rounded-[12px]">
              {/* Main info */}
              <div
                className={cn("grid grid-cols-[225px_1fr_115px] gap-8 p-12", {
                  "pb-8": isOpen,
                })}
              >
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

                  <div className="flex items-center gap-2">
                    <Typography
                      className="text-text-disabled"
                      variant="body-l"
                      tag="span"
                    >
                      Комитеты
                    </Typography>

                    <Button
                      onClick={() => setIsOpen((prev) => !prev)}
                      size={"icon"}
                      icon={
                        <Pluce
                          className={cn("size-5 transition-all", {
                            "rotate-45": isOpen,
                          })}
                        />
                      }
                    ></Button>
                  </div>
                </div>
              </div>

              {/* Committees — раскрывается */}
              {isOpen && (
                <div className="grid grid-cols-3 gap-8 px-12 pb-13">
                  {COMMITTEES.map((committee, idx) => (
                    <div
                      key={idx}
                      className={cn("flex flex-col gap-2", {
                        "border-border-secondary border-r pr-8":
                          idx !== COMMITTEES.length - 1,
                      })}
                    >
                      <Typography variant="body-m-strong" tag="p">
                        {committee.title}
                      </Typography>
                      <Typography
                        className="text-text-secondary"
                        variant="body-m"
                        tag="span"
                      >
                        {committee.person}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export { StructurePage };
