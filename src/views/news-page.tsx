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

          <Link
            href="#"
            className="border-border-secondary hover:border-border-accent-hover grid w-full grid-cols-2 gap-6 overflow-hidden border-b pb-10 transition-all"
          >
            <div className="relative h-[250px] w-full">
              <Image
                src={"/img/news/1.png"}
                alt="news-1"
                fill
                className="rounded-[12px] object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Typography variant="subtitle-serif-l" tag="p">
                  Глубокий уровень погружения развеял последние сомнения
                </Typography>
                <Typography
                  className="text-text-subtle"
                  variant="body-m"
                  tag="p"
                >
                  Безусловно, консультация с широким активом создаёт
                  необходимость включения в производственный план целого ряда
                  внеочередных мероприятий с учётом комплекса системы массового
                  участия.
                </Typography>
              </div>

              <Typography
                className="text-text-secondary"
                variant="body-s-strong"
                tag="span"
              >
                04.10.2026 05:05
              </Typography>
            </div>
          </Link>
          <Link
            href="#"
            className="border-border-secondary hover:border-border-accent-hover grid w-full grid-cols-2 gap-6 overflow-hidden border-b pb-10 transition-all"
          >
            <div className="relative h-[250px] w-full">
              <Image
                src={"/img/news/1.png"}
                alt="news-1"
                fill
                className="rounded-[12px] object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Typography variant="subtitle-serif-l" tag="p">
                  Глубокий уровень погружения развеял последние сомнения
                </Typography>
                <Typography
                  className="text-text-subtle"
                  variant="body-m"
                  tag="p"
                >
                  Безусловно, консультация с широким активом создаёт
                  необходимость включения в производственный план целого ряда
                  внеочередных мероприятий с учётом комплекса системы массового
                  участия.
                </Typography>
              </div>

              <Typography
                className="text-text-secondary"
                variant="body-s-strong"
                tag="span"
              >
                04.10.2026 05:05
              </Typography>
            </div>
          </Link>
        </div>

        <aside className="flex flex-col gap-4">
          <Link
            href={"#"}
            className="border-border-secondary hover:border-border-accent-hover flex gap-4 border-b pb-4 transition-all"
          >
            <Typography
              tag="p"
              className="text-text-subtle"
              variant="body-s-strong"
            >
              Новый закон накладывает вето на далёкий барабанный бой
            </Typography>

            <Image
              src={"/img/news/1.png"}
              alt="news-1"
              width={72}
              height={72}
              className="size-[72px] rounded-[6px] object-cover"
            />
          </Link>
          <Link
            href={"#"}
            className="border-border-secondary hover:border-border-accent-hover flex gap-4 border-b pb-4 transition-all"
          >
            <Typography
              tag="p"
              className="text-text-subtle"
              variant="body-s-strong"
            >
              Новый закон накладывает вето на далёкий барабанный бой
            </Typography>

            <Image
              src={"/img/news/1.png"}
              alt="news-1"
              width={72}
              height={72}
              className="size-[72px] rounded-[6px] object-cover"
            />
          </Link>
          <Link
            href={"#"}
            className="border-border-secondary hover:border-border-accent-hover flex gap-4 border-b pb-4 transition-all"
          >
            <Typography
              tag="p"
              className="text-text-subtle"
              variant="body-s-strong"
            >
              Новый закон накладывает вето на далёкий барабанный бой
            </Typography>

            <Image
              src={"/img/news/1.png"}
              alt="news-1"
              width={72}
              height={72}
              className="size-[72px] rounded-[6px] object-cover"
            />
          </Link>

          <Link
            href={"#"}
            className="relative h-[360px] overflow-hidden rounded-[16px]"
          >
            <Image
              src={"/img/news/1.png"}
              alt="news-1"
              fill
              className="size-[72px] rounded-[6px] object-cover"
            />

            <GradientShadow background="linear-gradient(to bottom, rgba(7, 16, 42, 0) 0%, rgba(5, 12, 31, 1) 94%)" />

            <div className="text-text-primary-on-color absolute inset-6 top-auto flex flex-col gap-3">
              <Typography
                className="line-clamp-3"
                tag="p"
                variant="subtitle-serif-s"
              >
                18 июля 2018 года в Совете Федерации Федерального Собрания РФ
                прошёл круглый стол на тему «Обеспечение безопасности
                образовательного процесса».
              </Typography>

              <Typography tag="span" variant="body-s-strong">
                10 ноября 2026
              </Typography>
            </div>
          </Link>
        </aside>
      </Container>
    </section>
  );
};

export { NewsPage };
