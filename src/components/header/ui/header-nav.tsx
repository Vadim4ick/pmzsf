"use client";

import Link from "next/link";
import { navbar, privateNavbar } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { useAuth } from "@/shared/hooks/useAuth";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";

const HeaderNav = memo(() => {
  const pathname = usePathname();
  const auth = useAuth();

  const nav = auth ? privateNavbar : navbar;

  return (
    <div
      className={cn(
        "border-border-secondary desktop:block bg-background-main sticky top-0 z-5 hidden border-b backdrop-blur-sm",
        auth ? "py-5" : "py-6",
      )}
    >
      <Container>
        <nav className="w-full">
          <ul className="flex w-full items-center justify-between gap-10">
            {nav.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group hover:border-text-accent-hover hover:text-text-accent-hover flex items-center gap-2 border-b-2 border-transparent pb-2 transition-colors",
                      isActive
                        ? "text-text-accent-active border-border-accent-active"
                        : "text-text-secondary group-hover:text-text-accent-hover",
                    )}
                  >
                    {item.icon && <item.icon />}

                    <Typography variant="button-link" tag="span">
                      {item.title}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
});

export { HeaderNav };

HeaderNav.displayName = "HeaderNav";
