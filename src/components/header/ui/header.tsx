import { Glasses } from "@/shared/icons/glasses";
import { LogoHeader } from "@/shared/icons/logo-header";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { User } from "@/shared/icons/user";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { HeaderNav } from "./header-nav";
import { TG_LINK, VK_LINK } from "@/shared/const/company.const";

const Header = () => {
  return (
    <div>
      <header className="py-6">
        <Container className="grid grid-cols-[242px_1fr_242px] gap-4">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Link
                href={TG_LINK}
                className="border-border-neutral flex size-8 items-center justify-center rounded-full border-2"
              >
                <Tg />
              </Link>

              <Link
                href={VK_LINK}
                className="border-border-neutral flex size-8 items-center justify-center rounded-full border-2"
              >
                <Vk />
              </Link>
            </div>

            <button className="flex cursor-pointer items-center gap-2">
              <div className="border-default rounded-full border p-2.5">
                <Glasses />
              </div>

              <Typography variant="body-small-strong" tag="p">
                Версия для слабовидящих
              </Typography>
            </button>
          </div>

          <Link href={"/"} className="flex items-center justify-center">
            <LogoHeader />
          </Link>

          <div className="flex flex-col items-end justify-between gap-4">
            <Button icon={<User />}>Вход</Button>

            <ThemeSwitcher />
          </div>
        </Container>
      </header>

      <div className="border-border-default border-b py-6">
        <Container>
          <HeaderNav />
        </Container>
      </div>
    </div>
  );
};

export { Header };
