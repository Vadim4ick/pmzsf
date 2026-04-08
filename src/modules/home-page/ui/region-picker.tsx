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
import { Typography } from "@/shared/ui/typography";

export const RegionPicker = memo(() => {
  const [selectedCode, setSelectedCode] = useState("RU-MOW");

  const selectedTitle = regions.find((r) => r.code === selectedCode)?.title;

  return (
    <div className="flex flex-col items-end gap-4">
      <Select value={selectedCode} onValueChange={setSelectedCode}>
        <SelectTrigger className="bg-background-default border-border-secondary h-16! w-full max-w-[400px] cursor-pointer border bg-white px-4 text-base font-medium shadow-none">
          <SelectValue placeholder="Выберите регион" />
        </SelectTrigger>
        <SelectContent className="rounded-[6px]">
          {regions.map((r) => (
            <SelectItem
              key={r.code}
              value={r.code}
              className="data-[state=checked]:bg-text-accent/10 cursor-pointer py-3 pl-4 text-sm font-medium"
            >
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
        <Typography variant="body-s-strong" className="text-text-secondary">
          Выбран регион:{" "}
          <Typography
            variant="body-s-strong"
            tag="span"
            className="text-text-primary"
          >
            {selectedTitle}
          </Typography>
        </Typography>
      )}
    </div>
  );
});

RegionPicker.displayName = "RegionPicker";
