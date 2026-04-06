import Link from "next/link";
import { navbar } from "../model/nav.const";
import { Typography } from "@/shared/ui/typography";
import { Search } from "@/shared/icons/search";

const HeaderNav = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-6">
      <nav>
        <ul className="flex items-center gap-10">
          {navbar.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <Typography
                  className="text-text-neutral"
                  variant="menu-font"
                  tag="span"
                >
                  {item.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="cursor-pointer">
        <Search />
      </button>
    </div>
  );
};

export { HeaderNav };
