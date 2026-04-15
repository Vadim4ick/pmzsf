import Link from "next/link";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/lib/utils";
import { ArrowBack } from "@/shared/icons/arrow-back";

interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

const getPageNumbers = (current: number, total: number): (number | "...")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");
  pages.push(total);

  return pages;
};

const Pagination = ({
  currentPage,
  totalPages,
  basePath = "/news",
}: NewsPaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  const getHref = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <nav
      aria-label="Пагинация новостей"
      className="flex items-center justify-center gap-1"
    >
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={getHref(currentPage - 1)}
          className="border-border-secondary hover:border-border-accent-hover hover:text-text-accent flex h-10 w-10 items-center justify-center rounded-[8px] border transition-all"
          aria-label="Предыдущая страница"
        >
          <Typography variant="body-m">
            <ArrowBack className="size-4" />
          </Typography>
        </Link>
      ) : (
        <span className="border-border-secondary text-text-disabled flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-[8px] border">
          <Typography variant="body-m">
            <ArrowBack className="size-4" />
          </Typography>
        </span>
      )}

      {/* Pages */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="text-text-subtle flex h-10 w-10 items-center justify-center"
          >
            <Typography variant="body-s-strong">...</Typography>
          </span>
        ) : (
          <Link
            key={page}
            href={getHref(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-[8px] border transition-all",
              page === currentPage
                ? "bg-background-accent border-background-accent text-text-primary-on-color pointer-events-none"
                : "border-border-secondary hover:border-border-accent-hover hover:text-text-accent",
            )}
          >
            <Typography variant="body-s-strong">{page}</Typography>
          </Link>
        ),
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={getHref(currentPage + 1)}
          className="border-border-secondary hover:border-border-accent-hover hover:text-text-accent flex h-10 w-10 items-center justify-center rounded-[8px] border transition-all"
          aria-label="Следующая страница"
        >
          <Typography variant="body-m">
            <ArrowBack className="size-4 rotate-180" />
          </Typography>
        </Link>
      ) : (
        <span className="border-border-secondary text-text-disabled flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-[8px] border">
          <Typography variant="body-m">
            <ArrowBack className="size-4 rotate-180" />
          </Typography>
        </span>
      )}
    </nav>
  );
};

export { Pagination };
