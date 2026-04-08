"use client";

import { LogoHeader } from "@/shared/icons/logo-header";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { User } from "@/shared/icons/user";
import { Search } from "@/shared/icons/search";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { ThemeSwitcher } from "./theme-switcher";
import { HeaderNav } from "./header-nav";
import { MobileMenu } from "./mobile-menu";
import { TG_LINK, VK_LINK } from "@/shared/const/company.const";
import { useState, useEffect, memo } from "react";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { Glasses } from "@/shared/icons/glasses";
import { useVisionStore } from "@/store/vision.store";
import { getRouteHome } from "@/shared/const/route.const";

const Header = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { active, toggle } = useVisionStore();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ─── Desktop ─── */}
      <header className="desktop:block hidden py-6">
        <Container className="grid grid-cols-[242px_1fr_242px] gap-4">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href={TG_LINK}
                className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
              >
                <Tg />
              </a>
              <a
                href={VK_LINK}
                className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
              >
                <Vk />
              </a>
            </div>

            <button
              onClick={toggle}
              className="group flex cursor-pointer items-center gap-2"
            >
              <div
                className={cn(`rounded-full p-2.5 transition-colors`, {
                  "bg-text-accent/10": active,
                })}
              >
                <Glasses />
              </div>
              <span className="text-sm font-medium">
                {active ? "Обычная версия" : "Версия для слабовидящих"}
              </span>
            </button>
          </div>

          <Link
            href={getRouteHome()}
            className="flex items-center justify-center"
          >
            <LogoHeader />
          </Link>

          <div className="flex flex-col items-end justify-between gap-4">
            <Button className="gap-1.5" icon={<User className="size-[20px]" />}>
              Вход
            </Button>
            <ThemeSwitcher />
          </div>
        </Container>
      </header>

      {/* Navbar */}
      <div className="border-border-secondary desktop:block bg-background-main sticky top-0 z-50 hidden border-b py-6 backdrop-blur-sm">
        <Container>
          <HeaderNav />
        </Container>
      </div>

      {/* ─── Mobile / Tablet ─── */}
      <div className="desktop:hidden">
        {/* Лого — обычный блок, не фиксированный */}
        <div className="border-border-secondary border-b py-4">
          <Container className="flex items-center justify-center">
            <Link href={getRouteHome()}>
              <LogoHeader />
            </Link>
          </Container>
        </div>

        {/* Фиксированная панель с бургером и поиском */}
        <div className="fixed top-0 right-0 z-50 flex items-center gap-1 p-2">
          <button
            aria-label="Поиск"
            className="text-text-primary bg-background-default/80 hover:bg-background-secondary flex size-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-colors"
          >
            <Search className="size-6" />
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={menuOpen}
            className="bg-background-default/80 hover:bg-background-secondary flex size-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full backdrop-blur-sm transition-colors"
          >
            <span
              className={cn(
                "block h-[1.5px] w-5 origin-center bg-current transition-all duration-300",
                menuOpen && "translate-y-[6.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 bg-current transition-all duration-300",
                menuOpen && "scale-x-0 opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 origin-center bg-current transition-all duration-300",
                menuOpen && "-translate-y-[6.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* ─── Mobile drawer ─── */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        offsetTop={56}
      />
    </>
  );
});

export { Header };

Header.displayName = "Header";
