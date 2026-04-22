import { Container } from "@/shared/ui/container";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import {
  GetTopFiveNewsQuery,
  NewsFragmentFragment,
} from "@/shared/graphql/__generated__";
import { dateFormatter, pathImage } from "@/shared/lib/utils";
import Link from "next/link";
import { getRouteNewsById } from "@/shared/const/route.const";

function SmallCard({ item }: { item: NewsFragmentFragment }) {
  return (
    <Link
      href={getRouteNewsById(`${item.id}`)}
      className="group group flex flex-1 cursor-pointer flex-col"
    >
      <div className="relative min-h-48 w-full flex-1">
        <Image
          src={pathImage(item.preview.id)}
          alt={item.title}
          fill
          className="block w-full rounded-[12px] object-cover transition-opacity group-hover:opacity-90"
        />
      </div>

      <div className="desktop:gap-4 desktop:pt-4 border-border-secondary desktop:pb-5 flex flex-col gap-3 border-b pt-3 pb-4">
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
          {dateFormatter(item.date_created)}
        </Typography>
      </div>
    </Link>
  );
}

function FeaturedCard({ item }: { item: NewsFragmentFragment }) {
  return (
    <article className="group flex h-full cursor-pointer flex-col">
      <div className="mobile:min-h-72 desktop:min-h-85 relative min-h-52 w-full">
        <Image
          src={pathImage(item.preview.id)}
          alt={item.title}
          fill
          className="block w-full rounded-t-[12px] object-cover transition-opacity group-hover:opacity-90"
        />
      </div>

      <div className="mobile:px-6 mobile:pt-5 border-border-secondary mobile:pb-6 desktop:px-10 desktop:pt-6 desktop:pb-10 flex flex-1 flex-col justify-between rounded-b-[12px] border px-4 pt-4 pb-5">
        <Typography variant="header-serif-xl" tag="h3" className="line-clamp-5">
          {item.title}
        </Typography>

        <div className="mt-4 flex items-end justify-between">
          <Link href={getRouteNewsById(`${item.id}`)}>
            <Button>Читать далее</Button>
          </Link>

          <Typography
            variant="body-s-strong"
            tag="span"
            className="text-text-secondary"
          >
            {dateFormatter(item.date_created)}
          </Typography>
        </div>
      </div>
    </article>
  );
}

const PlaceholderCard = () => (
  <article className="group pointer-events-none flex h-full cursor-pointer flex-col opacity-0" />
);

export const GridNews = ({ news }: { news?: GetTopFiveNewsQuery["news"] }) => {
  if (!news || news.length === 0) return null;

  const items = news.filter(Boolean);
  const [featured, ...rest] = items;

  // Добиваем до 4 элементов заглушками
  const padded = [...rest, null, null, null, null].slice(0, 4);
  const [left1, left2, right1, right2] = padded;

  return (
    <section className="mobile:pb-16 desktop:pb-24 pb-12">
      <Container>
        {/* Мобайл и tablet */}
        <div className="desktop:hidden flex flex-col gap-5">
          <FeaturedCard item={featured} />

          <div className="mobile:gap-5 max-mobile:grid-cols-1 grid grid-cols-2 gap-4">
            {padded.map((item, i) =>
              item ? (
                <SmallCard key={i} item={item} />
              ) : (
                <PlaceholderCard key={i} />
              ),
            )}
          </div>
        </div>

        {/* Desktop */}
        <div
          className="desktop:grid hidden gap-10"
          style={{ gridTemplateColumns: "296px 1fr 296px" }}
        >
          <div className="flex flex-col gap-5">
            {left1 ? <SmallCard item={left1} /> : <PlaceholderCard />}
            {left2 ? <SmallCard item={left2} /> : <PlaceholderCard />}
          </div>

          <FeaturedCard item={featured} />

          <div className="flex flex-col gap-5">
            {right1 ? <SmallCard item={right1} /> : <PlaceholderCard />}
            {right2 ? <SmallCard item={right2} /> : <PlaceholderCard />}
          </div>
        </div>
      </Container>
    </section>
  );
};
