"use client";

import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/shared/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Typography } from "@/shared/ui/typography";
import { memo, useState } from "react";

interface DateRangePickerProps {
  range: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
}

const DateRangePicker = memo(({ range, onSelect }: DateRangePickerProps) => {
  // черновой стейт — живёт только внутри попапа
  const [draft, setDraft] = useState<DateRange | undefined>(range);
  const [open, setOpen] = useState(false);

  const label = () => {
    if (!range?.from) return "За всё время";
    if (!range.to) return format(range.from, "LLLL yyyy", { locale: ru });
    return `${format(range.from, "dd.MM.yyyy")} — ${format(range.to, "dd.MM.yyyy")}`;
  };

  const handleApply = () => {
    onSelect(draft);
    setOpen(false);
  };

  const handleReset = () => {
    setDraft(undefined);
    onSelect(undefined);
    setOpen(false);
  };

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    // при открытии синхронизируем черновик с текущим применённым значением
    if (val) setDraft(range);
  };

  const hasChanges =
    draft?.from?.getTime() !== range?.from?.getTime() ||
    draft?.to?.getTime() !== range?.to?.getTime();

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
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
          selected={draft}
          onSelect={setDraft}
          locale={ru}
          numberOfMonths={2}
        />

        <div className="border-border-secondary flex items-center justify-between border-t p-3">
          {/* Сброс */}
          <button
            onClick={handleReset}
            className="text-text-secondary hover:text-text-primary cursor-pointer text-sm transition-colors"
          >
            Сбросить
          </button>

          {/* Применить — только если что-то выбрано и есть изменения */}
          {draft?.from && hasChanges && (
            <button
              onClick={handleApply}
              className="bg-background-accent text-text-primary-on-color hover:bg-background-accent-hover cursor-pointer rounded-[6px] px-4 py-1.5 text-sm transition-colors"
            >
              Применить
            </button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
});

DateRangePicker.displayName = "DateRangePicker";

export { DateRangePicker };
