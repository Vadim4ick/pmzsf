import { Container } from "@/shared/ui/container";
import { mockNews } from "@/shared/const/mockNews.const";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

type NewsItem = (typeof mockNews)[number];

function SmallCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-1 cursor-pointer flex-col">
      {/* flex-1 растягивает картинку на всё доступное пространство */}
      <div className="relative min-h-39.5 w-full flex-1">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="block w-full rounded-[12px] object-cover transition-opacity group-hover:opacity-90"
        />
      </div>

      {/* Текст всегда прижат к низу */}
      <div className="flex flex-col gap-4 pt-4 pb-5">
        <Typography variant="serif-l" tag="h3" className="line-clamp-4">
          {item.title}
        </Typography>

        <Typography
          variant="capton-strong"
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
    <article className="bg-background-default flex h-full cursor-pointer flex-col rounded-[12px]">
      <div className="relative min-h-85 w-full">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="block w-full object-cover transition-opacity group-hover:opacity-90"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between px-10 pt-6 pb-10">
        <Typography
          variant="header-xl"
          tag="h3"
          className="font-trola! line-clamp-5"
        >
          {item.title}
        </Typography>

        <div className="flex items-end justify-between">
          <Button>Читать далее</Button>

          <Typography
            variant="capton-strong"
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
    <section className="pt-14 pb-24">
      <Container>
        <div
          className="grid gap-10"
          style={{
            gridTemplateColumns: "296px 1fr 296px",
          }}
        >
          {/* Левая колонка */}
          <div className="flex flex-col gap-5">
            <SmallCard item={left1} />
            <SmallCard item={left2} />
          </div>

          {/* Центральная — главный материал */}
          <FeaturedCard item={featured} />

          {/* Правая колонка */}
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
