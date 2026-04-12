import { GradientShadow } from "@/shared/ui/gradient-shadow";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { HERO_NEWS, MAIN_NEWS } from "../model/news.mock";
import { getRouteNewsById } from "@/shared/const/route.const";

const AllNews = () => {
  return (
    <div className="flex flex-col gap-10">
      <Typography
        className="border-border-secondary border-b pb-8"
        variant="header-xxl"
        tag="h1"
      >
        Новости Палаты молодых законодателей
      </Typography>

      {/* Hero card */}
      <Link
        href={getRouteNewsById(String(1))}
        className="relative h-[300px] w-full overflow-hidden rounded-[12px] sm:h-[400px] md:h-[510px]"
      >
        <Image
          src={HERO_NEWS.src}
          alt={HERO_NEWS.alt}
          fill
          className="object-cover"
        />
        <GradientShadow background={HERO_NEWS.gradient} />

        <div className="text-text-primary-on-color absolute right-6 bottom-6 left-6 flex flex-col gap-6 md:right-10 md:bottom-10 md:left-10 md:gap-10">
          <Typography
            variant="header-serif-xl"
            className="line-clamp-3"
            tag="p"
          >
            {HERO_NEWS.title}
          </Typography>
          <Typography className="self-end" variant="body-s-strong" tag="span">
            {HERO_NEWS.date}
          </Typography>
        </div>
      </Link>

      {/* Main news list */}
      {MAIN_NEWS.map((item, idx) => (
        <Link
          key={idx + item.title}
          href={getRouteNewsById(String(1))}
          className="border-border-secondary hover:border-border-accent-hover grid w-full grid-cols-1 gap-6 overflow-hidden border-b pb-10 transition-all sm:grid-cols-2"
        >
          <div className="relative h-[200px] w-full sm:h-[250px]">
            <Image
              src={item.src}
              alt={item.alt}
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
              {item.date}
            </Typography>
          </div>
        </Link>
      ))}
    </div>
  );
};

export { AllNews };
