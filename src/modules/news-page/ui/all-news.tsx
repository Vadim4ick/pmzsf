import { GradientShadow } from "@/shared/ui/gradient-shadow";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { getRouteNewsById } from "@/shared/const/route.const";
import { Pagination } from "@/components/pagination";
import { GetAllNewsQuery } from "@/shared/graphql/__generated__";
import { dateFormatter, pathImage } from "@/shared/lib/utils";

interface AllNewsProps {
  news: GetAllNewsQuery["news"];
  currentPage: number;
  totalPages: number;
}

const AllNews = ({ news, currentPage, totalPages }: AllNewsProps) => {
  const [heroNews, ...restNews] = news;

  return (
    <div className="flex flex-col gap-10">
      <Typography
        className="border-border-secondary border-b pb-8"
        variant="header-xxl"
        tag="h1"
      >
        Новости Палаты молодых законодателей
      </Typography>

      {currentPage === 1 && heroNews && (
        <Link
          href={getRouteNewsById(heroNews.id)}
          className="relative h-[300px] w-full overflow-hidden rounded-[12px] sm:h-[400px] md:h-[510px]"
        >
          <Image
            src={pathImage(heroNews.preview.id)}
            alt={heroNews.title ?? ""}
            fill
            className="object-cover"
          />
          <GradientShadow background="linear-gradient(to top, rgba(0,0,0,0.7), transparent)" />
          <div className="text-text-primary-on-color absolute right-6 bottom-6 left-6 flex flex-col gap-6 md:right-10 md:bottom-10 md:left-10 md:gap-10">
            <Typography
              variant="header-serif-xl"
              className="line-clamp-3"
              tag="p"
            >
              {heroNews.title}
            </Typography>
            <Typography className="self-end" variant="body-s-strong" tag="span">
              {dateFormatter(heroNews.date_created)}
            </Typography>
          </div>
        </Link>
      )}

      {/* Main news list */}
      {(currentPage === 1 ? restNews : news).map((item) => (
        <Link
          key={item.id}
          href={getRouteNewsById(item.id)}
          className="border-border-secondary hover:border-border-accent-hover grid w-full grid-cols-1 gap-6 overflow-hidden border-b pb-10 transition-all sm:grid-cols-2"
        >
          <div className="relative h-[200px] w-full sm:h-[250px]">
            <Image
              src={pathImage(item.preview.id)}
              alt={item.title ?? ""}
              fill
              className="rounded-[12px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Typography variant="subtitle-serif-l" tag="p">
                {item.title}
              </Typography>
              <Typography className="text-text-subtle" variant="body-m" tag="p">
                {item.description}
              </Typography>
            </div>
            <Typography
              className="text-text-secondary"
              variant="body-s-strong"
              tag="span"
            >
              {dateFormatter(heroNews.date_created)}
            </Typography>
          </div>
        </Link>
      ))}

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export { AllNews };
