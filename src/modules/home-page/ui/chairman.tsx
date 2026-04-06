import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";

const Chairman = () => {
  return (
    <section className="pb-24">
      <Container className="flex flex-col gap-14">
        <Typography variant="header-l" tag="h2">
          Председатель палаты
        </Typography>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-10">
            <div className="bg-background-default border-border-default flex items-center gap-4 rounded-[12px] border p-6">
              <div className="size-[72px] shrink-0">
                <Image
                  src="/img/chairman.png"
                  alt="chairman"
                  className="rounded-[6px] object-cover"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <Typography variant="header-m" tag="h3">
                  Соболев Михаил Владимирович
                </Typography>
                <Typography variant="serif-m" tag="p">
                  Председатель Палаты молодых законодателей при Совете Федерации
                </Typography>
              </div>
            </div>

            <div className="flex h-[300px] gap-10">
              <div className="w-full">
                <video
                  poster="/img/chairman.png"
                  className="h-full rounded-[12px] object-cover"
                  controls
                  src="/video/chairman.mp4"
                />
              </div>

              <div className="flex w-full flex-col gap-4">
                <Link
                  href="#"
                  className="border-border-default flex items-center gap-4 border-b pb-4"
                >
                  <Typography
                    className="line-clamp-4"
                    variant="capton-strong"
                    tag="p"
                  >
                    Каждый из нас понимает очевидную вещь: существующая теория
                    предполагает независимые
                  </Typography>

                  <div className="size-[72px] shrink-0">
                    <Image
                      src="/img/chairman.png"
                      alt="chairman"
                      className="rounded-[6px] object-cover"
                      width={100}
                      height={100}
                    />
                  </div>
                </Link>

                <Link
                  href="#"
                  className="border-border-default flex items-center gap-4 border-b pb-4"
                >
                  <Typography
                    className="line-clamp-4"
                    variant="capton-strong"
                    tag="p"
                  >
                    Воистину радостный звук: ласковый перезвон вертикали власти
                  </Typography>

                  <div className="size-[72px] shrink-0">
                    <Image
                      src="/img/chairman.png"
                      alt="chairman"
                      className="rounded-[6px] object-cover"
                      width={100}
                      height={100}
                    />
                  </div>
                </Link>

                <Link
                  href="#"
                  className="border-border-default flex items-center gap-4 border-b pb-4"
                >
                  <Typography
                    className="line-clamp-4"
                    variant="capton-strong"
                    tag="p"
                  >
                    Цена вопроса не важна, когда небо темнеет!
                  </Typography>

                  <div className="size-[72px] shrink-0">
                    <Image
                      src="/img/chairman.png"
                      alt="chairman"
                      className="rounded-[6px] object-cover"
                      width={100}
                      height={100}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <article className="relative h-full w-full shrink-0">
            <Image
              src="/img/chairman.png"
              alt="chairman"
              className="rounded-[6px] object-cover"
              fill
            />

            <div className="absolute bottom-0 left-0 flex flex-col gap-6 p-6">
              <Typography variant="serif-l" tag="p" className="text-white">
                Рабочие встречи молодых законодателей в Ереване продолжаются
              </Typography>

              <div className="flex items-end justify-between gap-4 text-white">
                <Button className="text-white">Читать далее</Button>

                <Typography variant="capton-strong" tag="span">
                  10 ноября 2026
                </Typography>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export { Chairman };
