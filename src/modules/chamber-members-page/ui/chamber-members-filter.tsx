"use client";

import { AlphabetFilter } from "@/components/alphabet-filter";
import { memo } from "react";

const ChamberMembersFilter = memo(() => {
  return <AlphabetFilter />;
});

export { ChamberMembersFilter };

ChamberMembersFilter.displayName = "ChamberMembersFilter";
