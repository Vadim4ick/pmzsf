"use client";

import { LogoHeader } from "@/shared/icons/logo-header";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { Search } from "@/shared/icons/search";
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
import { SignInBtn } from "./sign-in-btn";
import { Typography } from "@/shared/ui/typography";
import { SearchModal } from "./search-modal";
import { useAuth } from "@/shared/hooks/useAuth";
import { SearchInput } from "@/components/search-inp";
import { Burger } from "./burger";
import { NotificationIcon } from "@/shared/icons/menu/notification-icon";
import { LogoSecondary } from "@/shared/icons/logo-secondary";
import { Avatar } from "./avatar";

const Header = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isAuth = useAuth();

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
        <Container
          className={cn(
            "grid grid-cols-[242px_1fr_242px] gap-4",
            !isAuth
              ? "grid-cols-[242px_1fr_242px]"
              : "grid-cols-[205px_1fr_205px]",
          )}
        >
          <div className="flex flex-col justify-between gap-4">
            {!isAuth ? (
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
            ) : (
              <Link
                href={getRouteHome()}
                className="flex h-[56px] items-end justify-end"
              >
                <LogoSecondary />
              </Link>
            )}

            {!isAuth && (
              <div className="flex items-center gap-4">
                <ThemeSwitcher />

                <button
                  onClick={toggle}
                  className="group flex cursor-pointer items-center gap-2"
                >
                  <div
                    className={cn(
                      `border-border-secondary shrink-0 rounded-full border p-2 transition-colors`,
                      {
                        "bg-text-accent/10": active,
                      },
                    )}
                  >
                    <Glasses />
                  </div>

                  <Typography
                    className="text-text-secondary text-start"
                    variant="body-s-strong"
                    tag="span"
                  >
                    {active ? "Обычная версия" : "Версия для слабовидящих"}
                  </Typography>
                </button>
              </div>
            )}
          </div>

          {!isAuth ? (
            <Link
              href={getRouteHome()}
              className="flex items-center justify-center"
            >
              <LogoHeader />
            </Link>
          ) : (
            <div className="mx-auto flex w-full max-w-[650px] items-center justify-center">
              <SearchInput
                className="bg-background-tertiary h-[50px] text-[16px] leading-6"
                onChange={() => {}}
                value={""}
                placeholder="Поиск"
              />
            </div>
          )}

          {!isAuth ? (
            <div className="flex flex-col items-end justify-between gap-4">
              <SignInBtn classNameIcon="size-[20px]" />

              <button
                onClick={() => setSearchOpen(true)}
                className="text-icon-primary hover:text-text-primary cursor-pointer transition-colors"
              >
                <Search />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <ThemeSwitcher />

              <div className="flex items-center gap-4">
                <button className="cursor-pointer">
                  <NotificationIcon />
                </button>

                <Avatar />
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Navbar */}
      <HeaderNav />

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
            onClick={() => setSearchOpen(true)}
            aria-label="Поиск"
            className="text-text-primary bg-background-default/80 hover:bg-background-secondary flex size-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-colors"
          >
            <Search className="size-6" />
          </button>

          {isAuth && (
            <div className="flex items-center gap-4">
              <button className="cursor-pointer">
                <NotificationIcon />
              </button>

              <Avatar />
            </div>
          )}

          <Burger menuOpen={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </div>
      </div>

      {/* ─── Mobile drawer ─── */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        offsetTop={56}
      />

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
});

export { Header };

Header.displayName = "Header";
