import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { RegionPicker } from "./region-picker";

const InfoRegions = () => {
  return (
    <>
      <section className="pb-10">
        <Container>
          <div className="max-tablet:grid-cols-1 max-tablet:gap-8 grid grid-cols-2 gap-4">
            <div className="desktop:gap-14 flex flex-col justify-between gap-8">
              <Typography variant="header-l" tag="h2">
                Представители в регионах
              </Typography>

              <div className="flex flex-col gap-6">
                <article className="flex items-center gap-6">
                  <div className="size-[112px] shrink-0">
                    <Image
                      src="/img/chairman.png"
                      alt="chairman"
                      className="rounded-[6px] object-cover"
                      width={112}
                      height={112}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Typography variant="header-m" tag="h3">
                      Ночевный Григорий Петрович
                    </Typography>
                    <Typography
                      className="text-text-neutral"
                      variant="serif-m"
                      tag="span"
                    >
                      Депутат Законодательного Собрания Новосибирской области
                    </Typography>
                  </div>
                </article>

                <article className="flex items-center gap-6">
                  <div className="size-[112px] shrink-0">
                    <Image
                      src="/img/chairman.png"
                      alt="chairman"
                      className="rounded-[6px] object-cover"
                      width={112}
                      height={112}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Typography variant="header-m" tag="h3">
                      Ночевный Григорий Петрович
                    </Typography>
                    <Typography
                      className="text-text-neutral"
                      variant="serif-m"
                      tag="span"
                    >
                      Депутат Законодательного Собрания Новосибирской области
                    </Typography>
                  </div>
                </article>
              </div>

              <Button className="w-fit">Деятельность в регионе</Button>
            </div>

            <div>
              <RegionPicker />
            </div>
          </div>
        </Container>
      </section>

      <section className="desktop:pb-24 mobile:pb-16 pb-12">
        <Container className="desktop:gap-14 flex flex-col gap-8">
          <Typography variant="header-l" tag="h2">
            Новости региона
          </Typography>

          <div className="max-mobile:grid-cols-1 grid grid-cols-2 gap-x-10 gap-y-8">
            <Link
              href="#"
              className="border-border-default group flex flex-col gap-6 border-b pb-8"
            >
              <Typography
                className="group-hover:text-text-brand line-clamp-4 transition-all"
                variant="serif-l"
                tag="p"
              >
                Курс на социально-ориентированный национальный проект ни к чему
                нас не обязывает
              </Typography>
              <Typography
                className="text-text-secondary"
                variant="capton-strong"
                tag="span"
              >
                15.04.2026
              </Typography>
            </Link>

            <Link
              href="#"
              className="border-border-default group flex flex-col gap-6 border-b pb-8"
            >
              <Typography
                className="group-hover:text-text-brand line-clamp-4 transition-all"
                variant="serif-l"
                tag="p"
              >
                18 июля 2018 года в Совете Федерации Федерального Собрания РФ
                прошёл круглый стол на тему «Обеспечение безопасности
                образовательного процесса».
              </Typography>
              <Typography
                className="text-text-secondary"
                variant="capton-strong"
                tag="span"
              >
                15.04.2026
              </Typography>
            </Link>
            <Link
              href="#"
              className="border-border-default group flex flex-col gap-6 border-b pb-8"
            >
              <Typography
                className="group-hover:text-text-brand line-clamp-4 transition-all"
                variant="serif-l"
                tag="p"
              >
                Давайте разбираться: героям были возданы соответствующие почести
              </Typography>
              <Typography
                className="text-text-secondary"
                variant="capton-strong"
                tag="span"
              >
                15.04.2026
              </Typography>
            </Link>
            <Link
              href="#"
              className="border-border-default group flex flex-col gap-6 border-b pb-8"
            >
              <Typography
                className="group-hover:text-text-brand line-clamp-4 transition-all"
                variant="serif-l"
                tag="p"
              >
                Убеждённость некоторых оппонентов одухотворила всех причастных
              </Typography>
              <Typography
                className="text-text-secondary"
                variant="capton-strong"
                tag="span"
              >
                15.04.2026
              </Typography>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export { InfoRegions };
