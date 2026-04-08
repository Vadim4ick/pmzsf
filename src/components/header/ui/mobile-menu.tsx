"use client";

import { cn } from "@/shared/lib/utils";
import { navbar } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { User } from "@/shared/icons/user";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";
import { TG_LINK, VK_LINK } from "@/shared/const/company.const";
import { Container } from "@/shared/ui/container";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  offsetTop: number;
}

const MobileMenu = ({ open, onClose, offsetTop }: MobileMenuProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "desktop:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />

      {/* Drawer — полная ширина снизу от хедера */}
      <div
        className={cn(
          "bg-background-main desktop:hidden fixed right-0 left-0 z-40 flex h-fit flex-col overflow-y-auto transition-transform duration-300 ease-in-out",
          open
            ? "translate-y-0"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <Container
          style={{
            paddingTop: `${offsetTop}px`,
          }}
          className={"flex w-full flex-col py-4"}
        >
          {/* Навигация */}
          <nav className="mb-4">
            <ul className="divide-border-secondary flex flex-col divide-y">
              {navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-3.5"
                  >
                    <Typography
                      className="text-text-primary group-hover:text-text-accent transition-colors"
                      variant="button-link"
                      tag="span"
                    >
                      {item.title}
                    </Typography>
                    <svg
                      className="group-hover:text-text-accent text-[#5a5a5a] transition-all group-hover:translate-x-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Вход */}
          <Button icon={<User />} className="mb-5 w-full justify-center">
            Вход
          </Button>

          {/* Нижняя панель */}
          <div className="border-border-secondary flex items-center justify-between gap-4 border-t pt-4 pb-2">
            <ThemeSwitcher />

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
        </Container>
      </div>
    </>
  );
};

export { MobileMenu };
