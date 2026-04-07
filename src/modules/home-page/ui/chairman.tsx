import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import { CustomVideo } from "@/shared/ui/сustom-video";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    href: "#",
    title:
      "Каждый из нас понимает очевидную вещь: существующая теория предполагает независимые",
  },
  {
    href: "#",
    title: "Воистину радостный звук: ласковый перезвон вертикали власти",
  },
  {
    href: "#",
    title: "Цена вопроса не важна, когда небо темнеет!",
  },
];

const Chairman = () => {
  return (
    <section className="desktop:pb-24 pb-12">
      <Container className="desktop:gap-14 flex flex-col gap-8">
        <Typography variant="header-l" tag="h2">
          Председатель палаты
        </Typography>

        {/* Основная сетка */}
        <div className="max-desktop:flex max-desktop:flex-col max-desktop:gap-6 grid grid-cols-2 gap-10">
          {/* Левая колонка */}
          <div className="desktop:gap-10 flex flex-col gap-6">
            {/* Карточка председателя */}
            <div className="bg-background-default border-border-default desktop:p-6 flex items-center gap-4 rounded-[12px] border p-4">
              <div className="desktop:size-[72px] size-14 shrink-0">
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
                  Председатель Палаты молодых законодателей при Совете Федерации
                </Typography>
              </div>
            </div>

            {/* Видео + новости */}
            <div className="mobile:flex-row desktop:gap-10 flex flex-col gap-6">
              {/* Видео — квадратное превью */}
              <div className="mobile:aspect-auto mobile:w-[45%] mobile:self-stretch aspect-video w-full shrink-0">
                <CustomVideo
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="/img/chairman.png"
                  title="Граница обучения кадров сделала своё дело"
                  className="h-full"
                />
              </div>

              {/* Список новостей */}
              <div className="desktop:gap-4 flex w-full flex-col gap-3">
                {newsItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group border-border-default desktop:gap-4 desktop:pb-4 flex items-center gap-3 border-b pb-3"
                  >
                    <Typography
                      className="group-hover:text-text-brand line-clamp-3 flex-1 transition-colors"
                      variant="capton-strong"
                      tag="p"
                    >
                      {item.title}
                    </Typography>
                    <div className="desktop:size-[72px] size-14 shrink-0">
                      <Image
                        src="/img/chairman.png"
                        alt="news"
                        className="rounded-[6px] object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка — большое фото */}
          <article className="mobile:min-h-[360px] desktop:h-full desktop:min-h-0 relative min-h-[280px] w-full">
            <Image
              src="/img/chairman/1.png"
              alt="chairman"
              className="rounded-[12px] object-cover"
              fill
            />

            {/* Тёмный оверлей — базовый слой */}
            {/* <div className="absolute inset-0 rounded-[12px] bg-[#030816]/30" /> */}

            {/* Градиент снизу вверх — до 51% непрозрачный, выше прозрачный */}
            <div
              className="absolute inset-0 rounded-[12px]"
              style={{
                background:
                  "linear-gradient(to top, #030816 0%, rgba(3,8,22,0) 51%)",
              }}
            />

            <div className="desktop:gap-6 desktop:p-6 absolute bottom-0 left-0 flex flex-col gap-4 p-4">
              <Typography variant="serif-l" tag="p" className="text-white">
                Рабочие встречи молодых законодателей в Ереване продолжаются
              </Typography>

              <div className="flex items-end justify-between gap-4 text-white">
                <Button className="text-white">Читать далее</Button>
                <Typography
                  variant="capton-strong"
                  tag="span"
                  className="text-white/80"
                >
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
