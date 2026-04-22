import { getRouteNewsById } from "@/shared/const/route.const";
import { GetHomePageQuery } from "@/shared/graphql/__generated__";
import { dateFormatter, pathImage } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { GradientShadow } from "@/shared/ui/gradient-shadow";
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

const Chairman = ({
  chairman,
  chairman_video,
  chairman_featured_news,
}: {
  chairman: GetHomePageQuery["home_page"]["chamber_chairman"];
  chairman_video?: GetHomePageQuery["home_page"]["chairman_video"];
  chairman_featured_news?: GetHomePageQuery["home_page"]["chairman_featured_news"];
}) => {
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
            <div className="bg-background-primary desktop:p-6 flex items-center gap-4 rounded-[12px] p-4">
              <div className="desktop:size-[72px] size-14 shrink-0">
                <Image
                  src={pathImage(chairman.avatar?.id ?? "")}
                  alt="chairman"
                  className="rounded-[6px] object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Typography variant="header-m" tag="h3">
                  {chairman.last_name} {chairman.first_name}
                </Typography>
                <Typography variant="subtitle-serif-s" tag="p">
                  Председатель Палаты молодых законодателей при Совете Федерации
                </Typography>
              </div>
            </div>

            {/* Видео + новости */}
            <div className="mobile:flex-row desktop:gap-10 flex flex-col gap-6">
              {/* Видео — квадратное превью */}
              {chairman_video && (
                <div className="mobile:aspect-auto mobile:w-[45%] mobile:self-stretch aspect-video w-full shrink-0">
                  <CustomVideo
                    src={pathImage(chairman_video?.id ?? "")}
                    poster={pathImage(chairman.avatar?.id ?? "")}
                    title="Граница обучения кадров сделала своё дело"
                    className="h-full"
                  />
                </div>
              )}

              {/* Список новостей */}
              <div className="desktop:gap-4 flex w-full flex-col gap-3">
                {newsItems.map((item, i) => (
                  <div
                    key={i}
                    className="border-border-secondary desktop:gap-4 desktop:pb-4 flex items-center gap-3 border-b pb-3"
                  >
                    <Typography
                      className="text-text-subtle line-clamp-4 flex-1 transition-colors"
                      variant="body-s-strong"
                      tag="p"
                    >
                      {item.title}
                    </Typography>
                    <div className="desktop:size-[72px] size-14 shrink-0">
                      <Image
                        src={pathImage(chairman.avatar?.id ?? "")}
                        alt="news"
                        className="rounded-[6px] object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка — большое фото */}
          {chairman_featured_news && (
            <article className="mobile:min-h-[360px] desktop:h-full desktop:min-h-0 relative min-h-[280px] w-full overflow-hidden rounded-[12px]">
              <Image
                src={pathImage(chairman_featured_news.preview.id ?? "")}
                alt="chairman"
                className="object-cover"
                fill
              />

              <GradientShadow />

              <div className="desktop:gap-6 desktop:p-6 absolute bottom-0 left-0 flex flex-col gap-4 p-4">
                <Typography
                  variant="subtitle-serif-l"
                  tag="p"
                  className="text-white"
                >
                  {chairman_featured_news.title}
                </Typography>

                <div className="flex items-end justify-between gap-4 text-white">
                  <Link href={getRouteNewsById(chairman_featured_news.id)}>
                    <Button className="hover:border-text-accent hover:text-text-accent text-text-primary-on-color border-white hover:bg-transparent">
                      Читать далее
                    </Button>
                  </Link>

                  <Typography
                    variant="body-s-strong"
                    tag="span"
                    className="text-white/80"
                  >
                    {dateFormatter(chairman_featured_news.date_created)}
                  </Typography>
                </div>
              </div>
            </article>
          )}
        </div>
      </Container>
    </section>
  );
};

export { Chairman };
