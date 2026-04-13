"use client";

import { Search } from "@/shared/icons/search";
import { Input } from "@/shared/ui/input";
import { memo } from "react";

const ChamberMembersSearch = memo(() => {
  return (
    <div className="relative w-full">
      <Input
        placeholder="Введите Фалимию члена палаты"
        className="bg-background-primary max-mobile:text-[16px] max-mobile:leading-6 max-mobile:h-[50px] h-[76px] w-full text-[24px] leading-7"
      />

      <Search className="absolute top-1/2 right-4 size-5 -translate-y-1/2" />
    </div>
  );
});

export { ChamberMembersSearch };

ChamberMembersSearch.displayName = "ChamberMembersSearch";
