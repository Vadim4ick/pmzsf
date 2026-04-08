import { Container } from "@/shared/ui/container";
import { GradientShadow } from "@/shared/ui/gradient-shadow";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";

const NewsPage = () => {
  return (
    <section>
      <Container className="grid grid-cols-[1fr_296px] gap-10">
        <div className="flex flex-col gap-10">
          <Typography
            className="border-border-secondary border-b pb-8"
            variant="header-xxl"
            tag="h1"
          >
            Новости Палаты молодых законодателей
          </Typography>

          <Link
            href="#"
            className="relative h-[510px] w-full overflow-hidden rounded-[12px]"
          >
            <Image
              src={"/img/news/1.png"}
              alt="news-1"
              fill
              className="object-cover"
            />

            <GradientShadow background="linear-gradient(to top, rgba(3, 8, 22, 1) 0%, rgba(3, 8, 22, 0.10) 51%)" />

            <div className="text-text-primary-on-color absolute right-10 bottom-10 left-10 flex flex-col gap-10">
              <Typography
                variant="header-serif-xl"
                className="line-clamp-3"
                tag="p"
              >
                Свободу слова не задушить, пусть даже солнечных дней всё меньше
              </Typography>

              <Typography
                className="self-end"
                variant="body-s-strong"
                tag="span"
              >
                23.08.2026 17:09
              </Typography>
            </div>
          </Link>
        </div>

        <aside>2</aside>
      </Container>
    </section>
  );
};

export { NewsPage };
