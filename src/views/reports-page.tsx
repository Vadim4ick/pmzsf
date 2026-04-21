"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { cn } from "@/shared/lib/utils";
import { Warning } from "@/shared/icons/warning";
import { useRouter } from "next/navigation";
import { MONTHS } from "@/shared/const/constants.const";

// ── Типы ──────────────────────────────────────────────

type ReportStatus = "not_submitted" | "on_review" | "scored";

interface MonthReport {
  month: string;
  status: ReportStatus;
  score?: number;
}

interface YearReports {
  [year: string]: MonthReport[];
}

// ── Моковые данные ────────────────────────────────────

const AVAILABLE_YEARS = ["2026", "2025", "2024"];

const MOCK_DATA: YearReports = {
  "2026": [
    { month: "Январь", status: "not_submitted" },
    { month: "Февраль", status: "scored", score: 345 },
    { month: "Март", status: "on_review" },
    { month: "Апрель", status: "not_submitted" },
  ],
  "2025": MONTHS.map((m) => ({
    month: m,
    status: "scored" as const,
    score: Math.floor(Math.random() * 500),
  })),
  "2024": MONTHS.map((m) => ({
    month: m,
    status: "scored" as const,
    score: Math.floor(Math.random() * 500),
  })),
};

// ── Компонент строки отчёта ───────────────────────────

const ReportRow = ({
  report,
  isLast,
  year,
  monthIndex,
}: {
  report: MonthReport;
  isLast: boolean;
  year: string;
  monthIndex: number;
}) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "bg-background-primary flex h-[64px] max-w-[315px] items-center justify-between rounded-[12px] pr-3 pl-4",
        !isLast && "border-border-secondary border-b",
      )}
    >
      <Typography variant="body-m-strong" tag="span">
        {report.month}
      </Typography>

      {report.status === "not_submitted" && (
        <Button
          className="gap-1.5"
          onClick={() => router.push(`/reports/${year}/${monthIndex + 1}`)}
        >
          <Warning />
          Сдать отчёт
        </Button>
      )}

      {report.status === "on_review" && (
        <Typography
          variant="header-s"
          tag="span"
          className="text-text-disabled"
        >
          На оценке
        </Typography>
      )}

      {report.status === "scored" && (
        <Typography
          variant="header-s"
          tag="span"
          className="text-text-accent-hover"
        >
          {report.score} баллов
        </Typography>
      )}
    </div>
  );
};

// ── Страница ──────────────────────────────────────────

const ReportsPage = () => {
  const [selectedYear, setSelectedYear] = useState(AVAILABLE_YEARS[0]);

  const reports = MOCK_DATA[selectedYear] ?? [];

  return (
    <section>
      <Container className="max-mobile:gap-8 flex flex-col gap-10">
        <div className="max-mobile:flex-col flex items-start justify-between gap-4">
          <Typography className="max-w-[580px]" variant="header-l" tag="h1">
            Отчеты деятельности члена Палаты молодых законодателей
          </Typography>

          <div className="w-full max-w-[200px]">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="bg-background-primary h-[56px]! w-full shrink-0 cursor-pointer text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_YEARS.map((year) => (
                  <SelectItem
                    className="cursor-pointer py-3 text-base"
                    key={year}
                    value={year}
                  >
                    {year} год
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-2 overflow-hidden rounded-[12px]">
          {reports.map((report, index) => (
            <ReportRow
              key={report.month}
              report={report}
              isLast={index === reports.length - 1}
              year={selectedYear}
              monthIndex={index}
            />
          ))}

          {reports.length === 0 && (
            <div className="bg-background-primary rounded-[12px] px-6 py-10 text-center">
              <Typography
                variant="body-m"
                tag="p"
                className="text-text-secondary"
              >
                Нет данных за {selectedYear} год
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { ReportsPage };
