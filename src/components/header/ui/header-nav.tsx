"use client";

import Link from "next/link";
import { navbar } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { Search } from "@/shared/icons/search";
import { usePathname } from "next/navigation";
import { memo } from "react";

const HeaderNav = memo(() => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between gap-4">
      <nav>
        <ul className="flex items-center gap-10">
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

      <button className="text-icon-primary hover:text-text-primary cursor-pointer transition-colors">
        <Search />
      </button>
    </div>
  );
});

export { HeaderNav };

HeaderNav.displayName = "HeaderNav";
