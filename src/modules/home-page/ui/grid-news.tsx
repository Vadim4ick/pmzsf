import { Container } from "@/shared/ui/container";
import { mockNews } from "@/shared/const/mockNews.const";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

type NewsItem = (typeof mockNews)[number];

function SmallCard({ item }: { item: NewsItem }) {
  return (
    <article className="group group flex flex-1 cursor-pointer flex-col">
      <div className="relative min-h-48 w-full flex-1">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="block w-full rounded-[12px] object-cover transition-opacity group-hover:opacity-90"
        />
      </div>

      <div className="desktop:gap-4 desktop:pt-4 desktop:pb-5 flex flex-col gap-3 pt-3 pb-4">
        <Typography
          variant="subtitle-serif-l"
          tag="h3"
          className="group-hover:text-text-accent line-clamp-4 transition-all"
        >
          {item.title}
        </Typography>

        <Typography
          variant="body-s-strong"
          tag="span"
          className="text-text-secondary"
        >
          {item.date}
        </Typography>
      </div>
    </article>
  );
}

function FeaturedCard({ item }: { item: NewsItem }) {
  return (
    <article className="bg-background-primary group flex h-full cursor-pointer flex-col rounded-[12px]">
      <div className="mobile:min-h-72 desktop:min-h-85 relative min-h-52 w-full">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="block w-full rounded-t-[12px] object-cover transition-opacity group-hover:opacity-90"
        />
      </div>

      <div className="mobile:px-6 mobile:pt-5 mobile:pb-6 desktop:px-10 desktop:pt-6 desktop:pb-10 flex flex-1 flex-col justify-between px-4 pt-4 pb-5">
        <Typography
          variant="header-serif-xl"
          tag="h3"
          className="font-trola! mobile:text-[32px] desktop:text-[40px] line-clamp-5 text-[24px]"
        >
          {item.title}
        </Typography>

        <div className="desktop:mt-0 mt-4 flex items-end justify-between">
          <Button>Читать далее</Button>

          <Typography
            variant="body-s-strong"
            tag="span"
            className="text-text-secondary"
          >
            {item.date}
          </Typography>
        </div>
      </div>
    </article>
  );
}

const GridNews = () => {
  const [left1, left2, featured, right1, right2] = mockNews;

  return (
    <section className="mobile:pt-10 mobile:pb-16 desktop:pt-14 desktop:pb-24 pt-8 pb-12">
      <Container>
        {/* Мобайл и tablet: стек — featured сверху, под ним 2x2 сетка */}
        <div className="desktop:hidden flex flex-col gap-5">
          <FeaturedCard item={featured} />

          <div className="mobile:gap-5 max-mobile:grid-cols-1 grid grid-cols-2 gap-4">
            <SmallCard item={left1} />
            <SmallCard item={right1} />
            <SmallCard item={left2} />
            <SmallCard item={right2} />
          </div>
        </div>

        {/* Desktop: оригинальная трёхколоночная сетка */}
        <div
          className="desktop:grid hidden gap-10"
          style={{ gridTemplateColumns: "296px 1fr 296px" }}
        >
          <div className="flex flex-col gap-5">
            <SmallCard item={left1} />
            <SmallCard item={left2} />
          </div>

          <FeaturedCard item={featured} />

          <div className="flex flex-col gap-5">
            <SmallCard item={right1} />
            <SmallCard item={right2} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { GridNews };
