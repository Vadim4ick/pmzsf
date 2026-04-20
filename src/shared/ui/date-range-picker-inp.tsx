"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Calendar } from "@/shared/ui/calendar";
import type { DateRange } from "react-day-picker";

// ── Типы ──────────────────────────────────────────────

interface DateRangeValue {
  from?: Date;
  to?: Date;
}

interface DatePickerBaseProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

interface DatePickerSingleProps extends DatePickerBaseProps {
  mode?: "single";
  value?: Date | string;
  onChange?: (date: Date | undefined) => void;
}

interface DatePickerRangeProps extends DatePickerBaseProps {
  mode: "range";
  value?: DateRangeValue;
  onChange?: (range: DateRangeValue | undefined) => void;
}

type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;

// ── Форматирование ────────────────────────────────────

const formatSingleDate = (value?: Date | string): string => {
  if (!value) return "";
  const date = typeof value === "string" ? new Date(value) : value;
  return format(date, "dd.MM.yyyy");
};

const formatDateRange = (range?: DateRangeValue): string => {
  if (!range?.from) return "";
  const from = format(range.from, "dd.MM.yyyy");
  if (!range.to) return from;
  const to = format(range.to, "dd.MM.yyyy");
  return `${from} – ${to}`;
};

// ── Компонент ─────────────────────────────────────────

const DatePickerInp = (props: DatePickerProps) => {
  const {
    placeholder = props.mode === "range"
      ? "ДД.ММ.ГГГГ – ДД.ММ.ГГГГ"
      : "ДД.ММ.ГГГГ",
    className,
    disabled,
  } = props;

  const [open, setOpen] = useState(false);
  const isRange = props.mode === "range";

  // Локальный стейт для незавершённого выбора диапазона (только from выбран)
  const [pendingRange, setPendingRange] = useState<DateRangeValue | null>(null);

  const displayValue = isRange
    ? formatDateRange(pendingRange ?? props.value)
    : formatSingleDate(props.value);

  const hasValue = isRange ? !!props.value?.from : !!props.value;

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      // При закрытии сбрасываем незавершённый выбор
      setPendingRange(null);
    }
  };

  const handleSingleSelect = (date: Date | undefined) => {
    if (!isRange) {
      (props as DatePickerSingleProps).onChange?.(date);
      setOpen(false);
    }
  };

  const handleRangeSelect = (range: DateRange | undefined) => {
    if (!isRange) return;

    const hasFrom = !!range?.from;
    const hasTo = !!range?.to;
    const fromChanged =
      range?.from?.getTime() !== pendingRange?.from?.getTime();

    if (hasFrom && hasTo && !fromChanged) {
      // Второй клик — обе даты выбраны, from не изменился → завершаем
      (props as DatePickerRangeProps).onChange?.(range);
      setPendingRange(null);
      setOpen(false);
    } else if (hasFrom) {
      // Первый клик или сброс выбора (from изменился) → сохраняем в pending
      setPendingRange({ from: range.from, to: undefined });
    }
  };

  const handleReset = () => {
    if (isRange) {
      (props as DatePickerRangeProps).onChange?.(undefined);
    } else {
      (props as DatePickerSingleProps).onChange?.(undefined);
    }
    setPendingRange(null);
    setOpen(false);
  };

  // Что показываем в Calendar.selected
  const calendarRangeValue: DateRange | undefined = (() => {
    if (!isRange) return undefined;

    // Если есть незавершённый выбор — показываем его
    if (pendingRange?.from) {
      return { from: pendingRange.from, to: pendingRange.to };
    }

    // Иначе — сохранённое значение
    if (props.value?.from) {
      return { from: props.value.from, to: props.value.to };
    }

    return undefined;
  })();

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild disabled={disabled}>
        <button type="button" className={cn("w-full text-left")}>
          <Input
            readOnly
            disabled={disabled}
            value={displayValue}
            placeholder={placeholder}
            rightIcon={<CalendarIcon className="size-5" />}
            className={cn(
              "pointer-events-none cursor-pointer border-none",
              !hasValue && "text-text-secondary",
              className,
            )}
          />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        {isRange ? (
          <Calendar
            mode="range"
            selected={calendarRangeValue}
            onSelect={handleRangeSelect}
            locale={ru}
            numberOfMonths={2}
            initialFocus
          />
        ) : (
          <Calendar
            mode="single"
            selected={
              props.value ? new Date(props.value as string | Date) : undefined
            }
            onSelect={handleSingleSelect}
            locale={ru}
            initialFocus
          />
        )}

        <div className="border-t px-3 py-2">
          <button
            type="button"
            className="text-text-secondary hover:text-text-primary cursor-pointer text-sm transition-colors"
            onClick={handleReset}
          >
            Сбросить
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { DatePickerInp };
export type {
  DatePickerProps,
  DatePickerSingleProps,
  DatePickerRangeProps,
  DateRangeValue,
};
