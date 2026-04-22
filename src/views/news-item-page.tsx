import { NewsContent, NewsSlider } from "@/modules/news-item-page";
import { mockNews } from "@/shared/const/mockNews.const";
import { getRouteNews, getRouteNewsById } from "@/shared/const/route.const";
import { GetNewsByIdQuery } from "@/shared/graphql/__generated__";
import { ArrowBack } from "@/shared/icons/arrow-back";
import { dateFormatter } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";

const NewsItemPage = ({ news }: { news: GetNewsByIdQuery["news_by_id"] }) => {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <div className="mx-auto flex max-w-[850px] flex-col items-center justify-center gap-10 px-4">
          <Typography
            className="text-center"
            variant="header-serif-xl"
            tag="h1"
          >
            {news.title}
          </Typography>

          <Typography
            className="text-text-secondary"
            variant="body-s-strong"
            tag="span"
          >
            {dateFormatter(news.date_created)}
          </Typography>
        </div>

        {news.images && news.images.length > 0 && (
          <NewsSlider slider={news.images} />
        )}

        <div className="max-mobile:gap-12 mx-auto flex max-w-[850px] flex-col gap-16 px-4">
          <NewsContent content={news.content} />

          {news.themes && news.themes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {news.themes.map((theme: string) => (
                <Typography
                  key={theme}
                  className="bg-background-secondary text-text-subtle rounded-[2px] p-1.5"
                  variant="body-s-strong"
                >
                  {theme}
                </Typography>
              ))}
            </div>
          )}

          {/* <div className="flex flex-col gap-12">
            <Typography variant="header-m-caps" tag="h3">
              смотрите также
            </Typography>

            <div className="max-mobile:gap-5 max-mobile:grid-cols-1 grid grid-cols-2 gap-10">
              {mockNews
                .filter((el) => el.id === 3 || el.id === 2)
                .map((item) => (
                  <Link
                    key={item.id}
                    href={getRouteNewsById(String(item.id))}
                    className="border-border-secondary group flex flex-col gap-4 border-b pb-5"
                  >
                    <div className="relative h-[242px] overflow-hidden rounded-[8px]">
                      <Image src={"/img/news/1.png"} alt="news" fill />
                    </div>

                    <div className="flex flex-col gap-4">
                      <Typography
                        className="group-hover:text-text-accent-hover line-clamp-3 transition-colors"
                        variant="subtitle-serif-l"
                        tag="p"
                      >
                        Давайте разбираться: героям были возданы соответствующие
                        почести
                      </Typography>

                      <Typography
                        className="text-text-secondary"
                        variant="body-s-strong"
                        tag="span"
                      >
                        18.05.2026
                      </Typography>
                    </div>
                  </Link>
                ))}
            </div>
          </div> */}

          <Link href={getRouteNews()}>
            <Button icon={<ArrowBack />} className="w-fit gap-1">
              Все новости
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { NewsItemPage };
