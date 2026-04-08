"use client";

import { Close } from "@/shared/icons/close";
import { Container } from "@/shared/ui/container";
import { useVisionStore } from "@/store/vision.store";
import { memo } from "react";

type FontSize = "normal" | "large" | "xlarge";

const FONT_SIZE_LABELS: Record<FontSize, string> = {
  normal: "А",
  large: "А+",
  xlarge: "А++",
};

export const VisionPanel = memo(() => {
  const { active, spacing, fontSize, toggle, setSpacing, setFontSize } =
    useVisionStore();

  if (!active) return null;

  return (
    <Container className="bg-bg-secondary border-border-default flex w-full items-center justify-between border-b px-6 py-3">
      <div className="flex items-center gap-6">
        {/* Размер шрифта */}
        <div className="flex items-center gap-2">
          <span className="text-text-secondary text-xs">Размер шрифта:</span>
          <div className="flex items-center gap-1">
            {(["normal", "large", "xlarge"] as FontSize[]).map((s) => (
              <button
                key={s}
                onClick={() => setFontSize(s)}
                className={`cursor-pointer rounded-md px-3 py-1 text-sm font-bold transition-colors ${
                  fontSize === s
                    ? "bg-text-brand text-white"
                    : "text-text-default hover:bg-text-brand/10"
                }`}
              >
                {FONT_SIZE_LABELS[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Разделитель */}
        <div className="bg-border-default h-5 w-px" />

        {/* Межбуквенный интервал */}
        <button
          onClick={() => setSpacing(!spacing)}
          className={`flex items-center gap-2 rounded-md px-3 py-1 text-sm transition-colors ${
            spacing
              ? "bg-text-brand/10 text-text-brand"
              : "text-text-default hover:bg-text-brand/10"
          }`}
        >
          <span className="font-medium tracking-widest">А В С</span>
          <span className="text-xs">Интервал</span>
        </button>
      </div>

      {/* Закрыть */}
      <button
        onClick={toggle}
        className="text-text-secondary hover:text-text-default flex cursor-pointer items-center gap-1.5 text-sm transition-colors"
      >
        <Close />
        Закрыть
      </button>
    </Container>
  );
});

VisionPanel.displayName = "VisionPanel";
