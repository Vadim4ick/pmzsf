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
    <Container className="bg-background-main border-border-secondary flex w-full items-center justify-between border-b px-6 py-3">
      <div className="flex items-center gap-6">
        {/* Размер шрифта */}
        <div className="flex items-center gap-2">
          <span className="text-primary-on-color text-xs">Размер шрифта:</span>
          <div className="flex items-center gap-1">
            {(["normal", "large", "xlarge"] as FontSize[]).map((s) => (
              <button
                key={s}
                onClick={() => setFontSize(s)}
                className={`cursor-pointer rounded-md px-3 py-1 text-sm font-bold transition-colors ${
                  fontSize === s
                    ? "bg-text-accent text-white"
                    : "text-text-primary hover:bg-text-accent/10"
                }`}
              >
                {FONT_SIZE_LABELS[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Разделитель */}
        <div className="bg-border-secondary h-5 w-px" />

        {/* Межбуквенный интервал */}
        <button
          onClick={() => setSpacing(!spacing)}
          className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-1 text-sm transition-colors ${
            spacing
              ? "bg-text-accent/10 text-text-accent"
              : "text-text-primary hover:bg-text-accent/10"
          }`}
        >
          <span className="font-medium tracking-widest">А В С</span>
          <span className="text-xs">Интервал</span>
        </button>
      </div>

      {/* Закрыть */}
      <button
        onClick={toggle}
        className="hover:text-primary-on-color text-primary-on-color/90 flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
      >
        <Close />
        Закрыть
      </button>
    </Container>
  );
});

VisionPanel.displayName = "VisionPanel";
