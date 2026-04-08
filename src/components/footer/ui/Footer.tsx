import { LogoFooter } from "@/shared/icons/logo-footer";
import { Container } from "@/shared/ui/container";
import Link from "next/link";
import { footerNav } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { Input } from "@/shared/ui/input";

const Footer = () => {
  return (
    <footer className="desktop:pt-24 bg-grey-900 pt-12 pb-8 text-white">
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
                  className="text-text-primary-on-color/50"
                  variant="subtitle-serif-l"
                  tag="p"
                >
                  {item.title}
                </Typography>

                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href} className="group">
                      <Typography
                        className="text-text-primary-on-color/70 group-hover:text-text-primary-on-color transition-all"
                        variant="body-l"
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
        <div className="tablet:flex-row tablet:justify-between tablet:gap-4 tablet:pt-9 flex flex-col items-end gap-6 pt-6">
          <Typography
            className="text-text-primary-on-color/50 tablet:max-w-122"
            variant="body-s"
            tag="span"
          >
            © 2026 Палата молодых законодателей при Совете Федерации
            Федерального Собрания Российской Федерации. Все права защищены
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
