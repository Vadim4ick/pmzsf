"use client";

import { AlphabetFilter } from "@/components/alphabet-filter";
import { useAlphabetStore } from "@/store/alphabet.store";
import { memo } from "react";

const ChamberMembersFilter = memo(() => {
  const { activeLetter, setLetter } = useAlphabetStore();

  return <AlphabetFilter active={activeLetter} onChange={setLetter} />;
});

export { ChamberMembersFilter };

ChamberMembersFilter.displayName = "ChamberMembersFilter";
