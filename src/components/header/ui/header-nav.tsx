"use client";

import Link from "next/link";
import { navbar } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { usePathname } from "next/navigation";
import { memo } from "react";

const HeaderNav = memo(() => {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="flex w-full items-center justify-between gap-10">
        {navbar.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <li key={index}>
              <Link href={item.href} className="group">
                <Typography
                  className={`border-b-2 border-transparent pb-2 transition-colors ${
                    isActive
                      ? "text-text-accent border-border-accent-hover"
                      : "text-text-secondary group-hover:text-text-accent-hover"
                  }`}
                  variant="button-link"
                  tag="span"
                >
                  {item.title}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

export { HeaderNav };

HeaderNav.displayName = "HeaderNav";
