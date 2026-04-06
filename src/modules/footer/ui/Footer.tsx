import { LogoFooter } from "@/shared/icons/logo-footer";
import { Container } from "@/shared/ui/container";
import Link from "next/link";
import { footerNav } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { TG_LINK, VK_LINK } from "@/shared/const/company.const";

const Footer = () => {
  return (
    <footer className="bg-[#10181F] pt-24 pb-8 text-white">
      <Container className="flex flex-col gap-16">
        <div className="flex justify-between gap-4">
          <Link href={"/"}>
            <LogoFooter />
          </Link>

          <nav className="flex gap-10">
            {footerNav.map((item, index) => (
              <ul key={index} className="flex w-46.25 flex-col gap-6">
                <Typography
                  className="text-text-secondary"
                  variant="serif-l"
                  tag="p"
                >
                  {item.title}
                </Typography>

                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href}>
                      <Typography
                        className="text-text-light"
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

          <div></div>
        </div>

        <div className="border-text-light/20 flex items-end justify-between gap-4 border-t pt-9">
          <Typography
            className="text-text-neutral max-w-122"
            variant="capton"
            tag="span"
          >
            © 2026 Палата молодых законодателей при Совете Федерации
            Федерального Собрания Российской Федерации. Все права защищены
          </Typography>

          <div className="flex items-center gap-2.5">
            <Link
              href={TG_LINK}
              className="border-border-default flex size-8 items-center justify-center rounded-full border-2"
            >
              <Tg />
            </Link>

            <Link
              className="border-border-default flex size-8 items-center justify-center rounded-full border-2"
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
