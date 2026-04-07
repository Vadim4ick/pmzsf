import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";

const service = [
  {
    name: "Портал Гос. услуг",
    link: "gosuslugi.ru",
    img: "gosuslugi",
  },
  {
    name: "Парламентская газета",
    link: "council.gov.ru",
    img: "newspaper",
  },
  {
    name: "Правительство России",
    link: "government.ru",
    img: "government",
  },
];

const GosServiceLinks = () => {
  return (
    <section className="max-mobile:pb-12 pb-22">
      <Container className="max-desktop:flex-col max-desktop:gap-4 flex items-center gap-10">
        {service.map((el) => (
          <div
            key={el.name}
            className="bg-background-default border-border-default flex w-full items-center justify-center gap-4 rounded-[12px] border p-4"
          >
            <div className="relative size-[56px]">
              <Image
                src={`/img/gos-service/${el.img}.png`}
                alt={el.name}
                fill
              />
            </div>

            <div className="flex flex-col">
              <Typography variant="serif-s" tag="p">
                {el.name}
              </Typography>

              <Link
                href={`https://${el.link}/`}
                target="_blank"
                className="w-fit"
              >
                <Typography
                  className="text-text-secondary"
                  variant="capton"
                  tag="span"
                >
                  {el.link}
                </Typography>
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export { GosServiceLinks };
