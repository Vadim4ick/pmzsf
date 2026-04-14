"use client";

import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { RussianMap } from "@/shared/ui/russian-map";
import { Typography } from "@/shared/ui/typography";
import { useGetAllRegions } from "@/shared/services/regions.service";

export const RegionPicker = memo(
  ({
    selectedCode,
    setSelectedCode,
  }: {
    selectedCode: string;
    setSelectedCode: (code: string) => void;
  }) => {
    const { data, isLoading } = useGetAllRegions();

    const regions = data?.regions ?? [];
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
            {isLoading && (
              <SelectItem value="loading" disabled>
                Загрузка...
              </SelectItem>
            )}
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
  },
);

RegionPicker.displayName = "RegionPicker";
