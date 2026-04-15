"use client";

import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import { useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";

const LETTERS = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

type AlphabetFilterProps = {
  className?: string;
};

const AlphabetFilter = memo(({ className }: AlphabetFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("letter");

  const handleClick = (letter: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (active === letter) {
      // повторный клик — сбрасываем фильтр
      params.delete("letter");
    } else {
      params.set("letter", letter);
    }

    // сбрасываем страницу при смене буквы
    params.delete("page");

    router.push(`?${params.toString()}`);
  };

  return (
    <div className={cn("bg-background-primary", className)}>
      <Container className="desktop:justify-between flex flex-wrap gap-x-1 gap-y-1 py-3">
        {LETTERS.map((letter) => (
          <button
            key={letter}
            type="button"
            onClick={() => handleClick(letter)}
            className={cn(
              "flex size-8 cursor-pointer items-center justify-center rounded-[6px] transition-colors",
              {
                "bg-background-secondary-hover": active === letter,
              },
            )}
          >
            <Typography
              className={cn("text-text-secondary", {
                "text-text-primary": active === letter,
              })}
              variant="body-m-strong"
              tag="span"
            >
              {letter}
            </Typography>
          </button>
        ))}
      </Container>
    </div>
  );
});

export { AlphabetFilter };

AlphabetFilter.displayName = "AlphabetFilter";
