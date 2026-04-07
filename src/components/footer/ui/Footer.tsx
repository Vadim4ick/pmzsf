import { LogoFooter } from "@/shared/icons/logo-footer";
import { Container } from "@/shared/ui/container";
import Link from "next/link";
import { footerNav } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { TG_LINK, VK_LINK } from "@/shared/const/company.const";
import { Input } from "@/shared/ui/input";

const Footer = () => {
  return (
    <footer className="desktop:pt-24 bg-[#10181F] pt-12 pb-8 text-white">
      <Container className="desktop:gap-16 flex flex-col gap-10">
        {/* Верхний блок */}
        <div className="tablet:flex-row tablet:justify-between tablet:gap-4 flex flex-col gap-8">
          {/* Лого */}
          <Link
            href={"/"}
            className="max-mobile:flex max-mobile:justify-center shrink-0"
          >
            <LogoFooter />
          </Link>

          {/* Навигация */}
          <nav className="tablet:flex tablet:gap-10 max-mobileSmall:grid-cols-1 grid grid-cols-2 gap-x-6 gap-y-8">
            {footerNav.map((item, index) => (
              <ul
                key={index}
                className="tablet:w-46.25 tablet:gap-6 max-tablet:items-center flex flex-col gap-4"
              >
                <Typography
                  className="text-text-secondary"
                  variant="serif-l"
                  tag="p"
                >
                  {item.title}
                </Typography>

                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href} className="group">
                      <Typography
                        className="text-text-light transition-all group-hover:text-white"
                        variant="menu-font"
                        tag="p"
                      >
                        {subItem.title}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>

          <div className="max-mobile:max-w-full w-full max-w-[300px]">
            <Input placeholder="Поиск" className="h-[55px]" />
          </div>
        </div>

        {/* Нижний блок */}
        <div className="border-text-light/20 tablet:flex-row tablet:justify-between tablet:gap-4 tablet:pt-9 flex flex-col items-end gap-6 border-t pt-6">
          <Typography
            className="text-text-neutral tablet:max-w-122"
            variant="capton"
            tag="span"
          >
            © 2026 Палата молодых законодателей при Совете Федерации
            Федерального Собрания Российской Федерации. Все права защищены
          </Typography>

          <div className="flex shrink-0 items-center gap-2.5">
            <Link
              href={TG_LINK}
              className="border-border-default hover:border-text-brand flex size-8 items-center justify-center rounded-full border-2"
            >
              <Tg />
            </Link>

            <Link
              className="border-border-default hover:border-text-brand flex size-8 items-center justify-center rounded-full border-2"
              href={VK_LINK}
            >
              <Vk />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
