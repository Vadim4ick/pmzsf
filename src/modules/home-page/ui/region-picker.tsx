"use client";

import { memo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { regions } from "@/shared/const/regions.const";
import { RussianMap } from "@/shared/ui/russian-map";

export const RegionPicker = memo(() => {
  const [selectedCode, setSelectedCode] = useState("RU-MOW");

  const selectedTitle = regions.find((r) => r.code === selectedCode)?.title;

  return (
    <div className="flex flex-col gap-4">
      <Select value={selectedCode} onValueChange={setSelectedCode}>
        <SelectTrigger className="border-border-default bg-background-default h-12 rounded-[12px] text-sm font-medium">
          <SelectValue placeholder="Выберите регион" />
        </SelectTrigger>
        <SelectContent>
          {regions.map((r) => (
            <SelectItem key={r.code} value={r.code}>
              {r.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <RussianMap
        selectedCode={selectedCode}
        onRegionSelect={(region) => setSelectedCode(region.code)}
      />

      {selectedTitle && (
        <p className="text-text-secondary text-sm">
          Выбран регион:{" "}
          <span className="text-text-default font-medium">{selectedTitle}</span>
        </p>
      )}
    </div>
  );
});

RegionPicker.displayName = "RegionPicker";
