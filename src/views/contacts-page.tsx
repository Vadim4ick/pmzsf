import { TG_LINK, VK_LINK } from "@/shared/const/company.const";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Link from "next/link";

const ContactsPage = () => {
  return (
    <section>
      <Container>
        <Typography
          className="border-border-secondary border-b pb-8"
          variant="header-xxl"
          tag="h1"
        >
          Контакты
        </Typography>

        <div className="max-desktop:grid-cols-2 max-mobile:grid-cols-1 max-mobile:pt-8 grid grid-cols-[1.3fr_0.8fr_0.7fr_0.55fr] gap-8 pt-10">
          <div className="mobile:border-border-secondary mobile:border-r mobile:pr-8 flex flex-col gap-4">
            <Typography variant="body-serif" tag="p">
              Адрес
            </Typography>
            <Typography variant="header-s" tag="p">
              107031, г. Москва, ул. Большая Дмитровка, д.26
            </Typography>
          </div>

          <div className="desktop:border-border-secondary desktop:border-r desktop:pr-8 flex flex-col gap-4">
            <Typography variant="body-serif" tag="p">
              Электронная почта
            </Typography>

            <Link href="mailto:palata.molod@yandex.ru">
              <Typography
                className="hover:text-text-accent-hover transition-all"
                variant="header-s"
                tag="span"
              >
                palata.molod@yandex.ru
              </Typography>
            </Link>
          </div>

          <div className="mobile:border-border-secondary mobile:border-r mobile:pr-8 flex flex-col gap-4">
            <Typography variant="body-serif" tag="p">
              Приёмная телефон
            </Typography>

            <Link href="tel:+79520414305">
              <Typography
                className="hover:text-text-accent-hover transition-all"
                variant="header-s"
                tag="span"
              >
                +7 952 041-43-05
              </Typography>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="body-serif" tag="p">
              Социальные сети
            </Typography>

            <div className="flex items-center gap-2">
              <Link
                href={TG_LINK}
                className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
              >
                <Tg />
              </Link>
              <Link
                href={VK_LINK}
                className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
              >
                <Vk />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { ContactsPage };
