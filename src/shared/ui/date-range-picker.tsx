"use client";

import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/shared/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Typography } from "@/shared/ui/typography";
import { memo } from "react";

interface DateRangePickerProps {
  range: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
}

const DateRangePicker = memo(({ range, onSelect }: DateRangePickerProps) => {
  const label = () => {
    if (!range?.from) return "За всё время";
    if (!range.to) return format(range.from, "LLLL yyyy", { locale: ru });
    return `${format(range.from, "dd.MM.yyyy")} — ${format(range.to, "dd.MM.yyyy")}`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border-border-secondary hover:border-border-accent flex cursor-pointer items-center gap-2 rounded-[6px] border px-4 py-2 transition-colors">
          <CalendarIcon className="text-text-secondary size-4" />
          <Typography variant="body-m" tag="span">
            {label()}
          </Typography>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          onSelect={onSelect}
          locale={ru}
          numberOfMonths={2}
        />

        {/* Сброс */}
        {range && (
          <div className="border-border-secondary border-t p-3">
            <button
              onClick={() => onSelect(undefined)}
              className="text-text-accent hover:text-text-accent-hover w-full cursor-pointer text-center text-sm transition-colors"
            >
              Сбросить
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
});

export { DateRangePicker };

DateRangePicker.displayName = "DateRangePicker";
