"use client";

import { Search } from "@/shared/icons/search";
import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";

const SearchInput = ({
  placeholder = "Поиск",
  onChange,
  className = "",
  value,
}: {
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
  className?: string;
}) => {
  return (
    <div className="relative h-fit w-full">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "bg-background-primary max-mobile:text-[16px] max-mobile:leading-6 max-mobile:h-[50px] h-[76px] w-full text-[24px] leading-7",
          className,
        )}
      />

      <Search className="absolute top-1/2 right-4 size-5 -translate-y-1/2" />
    </div>
  );
};

export { SearchInput };
