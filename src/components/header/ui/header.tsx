"use client";

import { Glasses } from "@/shared/icons/glasses";
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
import { useState, useEffect, useRef } from "react";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const topHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!topHeaderRef.current) return;
      const { bottom } = topHeaderRef.current.getBoundingClientRect();
      setIsNavSticky(bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ─── Desktop ─── */}
      <div className="desktop:block hidden">
        <header className="py-6" ref={topHeaderRef}>
          <Container className="grid grid-cols-[242px_1fr_242px] gap-4">
            <div className="flex flex-col justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <a
                  href={TG_LINK}
                  className="border-border-neutral hover:border-text-brand flex size-8 items-center justify-center rounded-full border-2 transition-colors"
                >
                  <Tg />
                </a>
                <a
                  href={VK_LINK}
                  className="border-border-neutral hover:border-text-brand flex size-8 items-center justify-center rounded-full border-2 transition-colors"
                >
                  <Vk />
                </a>
              </div>
              <button className="group flex cursor-pointer items-center gap-2">
                <div className="border-border-default group-hover:border-text-brand rounded-full border p-2.5 transition-colors">
                  <Glasses />
                </div>
                <span className="text-sm font-medium">
                  Версия для слабовидящих
                </span>
              </button>
            </div>

            <Link href="/" className="flex items-center justify-center">
              <LogoHeader />
            </Link>

            <div className="flex flex-col items-end justify-between gap-4">
              <Button icon={<User />}>Вход</Button>
              <ThemeSwitcher />
            </div>
          </Container>
        </header>

        <div
          className={cn(
            "border-border-default border-b py-6 transition-shadow duration-200",
            isNavSticky
              ? "bg-background-default/95 fixed top-0 right-0 left-0 z-50 shadow-sm backdrop-blur-sm"
              : "relative",
          )}
        >
          <Container>
            <HeaderNav />
          </Container>
        </div>

        {/* Спейсер — занимает место навбара когда он зафиксирован */}
        {isNavSticky && <div className="h-[80.5px]" />}
      </div>

      {/* ─── Mobile / Tablet ─── */}
      <div className="desktop:hidden">
        {/* Лого — обычный блок, не фиксированный */}
        <div className="border-border-default border-b py-4">
          <Container className="flex items-center justify-center">
            <Link href="/">
              <LogoHeader />
            </Link>
          </Container>
        </div>

        {/* Фиксированная панель с бургером и поиском */}
        <div className="fixed top-0 right-0 z-50 flex items-center gap-1 p-2">
          <button
            aria-label="Поиск"
            className="text-text-default bg-background-default/80 hover:bg-background-secondary flex size-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-colors"
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
};

export { Header };
