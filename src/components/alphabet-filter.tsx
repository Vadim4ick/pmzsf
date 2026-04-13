"use client";

import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import { useAlphabetStore } from "@/store/alphabet.store";
import { useEffect } from "react";

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
  active?: string;
  onChange?: (letter: string) => void;
  className?: string;
};

const AlphabetFilter = ({
  active,
  onChange,
  className,
}: AlphabetFilterProps) => {
  const { reset } = useAlphabetStore();

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <div className={cn("bg-background-primary", className)}>
      <Container className="desktop:justify-between flex flex-wrap gap-x-1 gap-y-1 py-3">
        {LETTERS.map((letter) => (
          <button
            key={letter}
            type="button"
            onClick={() => onChange?.(letter)}
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
};

export { AlphabetFilter };
