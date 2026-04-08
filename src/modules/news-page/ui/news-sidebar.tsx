import { Typography } from "@/shared/ui/typography";
import { SIDEBAR_FEATURED, SIDEBAR_NEWS } from "../model/news.mock";
import Link from "next/link";
import Image from "next/image";
import { GradientShadow } from "@/shared/ui/gradient-shadow";

const NewsSidebar = () => {
  return (
    <aside className="flex flex-col gap-4">
      {/* Sidebar news list */}
      <div className="max-desktop:grid-cols-2 max-desktop:gap-x-6 max-mobile:grid-cols-1 grid grid-cols-1 gap-4">
        {SIDEBAR_NEWS.map((item, idx) => (
          <Link
            key={idx + item.title}
            href={item.href}
            className="border-border-secondary hover:border-border-accent-hover max-mobile:justify-between flex gap-4 border-b pb-4 transition-all"
          >
            <Typography
              tag="p"
              className="text-text-subtle"
              variant="body-s-strong"
            >
              {item.title}
            </Typography>
            <Image
              src={item.src}
              alt={item.alt}
              width={72}
              height={72}
              className="size-[72px] shrink-0 rounded-[6px] object-cover"
            />
          </Link>
        ))}
      </div>

      {/* Sidebar featured card */}
      <Link
        href={SIDEBAR_FEATURED.href}
        className="relative h-[280px] overflow-hidden rounded-[16px] sm:h-[360px]"
      >
        <Image
          src={SIDEBAR_FEATURED.src}
          alt={SIDEBAR_FEATURED.alt}
          fill
          className="rounded-[6px] object-cover"
        />
        <GradientShadow background={SIDEBAR_FEATURED.gradient} />
        <div className="text-text-primary-on-color absolute inset-6 top-auto flex flex-col gap-3">
          <Typography
            className="line-clamp-3"
            tag="p"
            variant="subtitle-serif-s"
          >
            {SIDEBAR_FEATURED.title}
          </Typography>
          <Typography tag="span" variant="body-s-strong">
            {SIDEBAR_FEATURED.date}
          </Typography>
        </div>
      </Link>
    </aside>
  );
};

export { NewsSidebar };
