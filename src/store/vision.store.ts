import { create } from "zustand";
import { persist } from "zustand/middleware";

type FontSize = "normal" | "large" | "xlarge";

const FONT_SIZE_CLASSES: Record<FontSize, string> = {
  normal: "",
  large: "vision-font-lg",
  xlarge: "vision-font-xl",
};

interface VisionState {
  active: boolean;
  spacing: boolean;
  fontSize: FontSize;
  toggle: () => void;
  setSpacing: (value: boolean) => void;
  setFontSize: (size: FontSize) => void;
}

const applyFontSize = (size: FontSize) => {
  document.documentElement.classList.remove("vision-font-lg", "vision-font-xl");
  if (FONT_SIZE_CLASSES[size]) {
    document.documentElement.classList.add(FONT_SIZE_CLASSES[size]);
  }
};

export const useVisionStore = create<VisionState>()(
  persist(
    (set, get) => ({
      active: false,
      spacing: false,
      fontSize: "normal",

      toggle: () => {
        const next = !get().active;
        set({ active: next });

        if (!next) {
          set({ spacing: false, fontSize: "normal" });
          document.documentElement.classList.remove(
            "vision-spacing",
            "vision-font-lg",
            "vision-font-xl",
          );
        } else {
          applyFontSize(get().fontSize);
          document.documentElement.classList.toggle(
            "vision-spacing",
            get().spacing,
          );
        }
      },

      setSpacing: (value) => {
        set({ spacing: value });
        document.documentElement.classList.toggle("vision-spacing", value);
      },

      setFontSize: (size) => {
        set({ fontSize: size });
        applyFontSize(size);
      },
    }),
    {
      name: "vision-store",
      partialize: (state) => ({
        active: state.active,
        spacing: state.spacing,
        fontSize: state.fontSize,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        // Применяем классы на body после восстановления из localStorage
        if (state.active) {
          document.documentElement.classList.toggle(
            "vision-spacing",
            state.spacing,
          );
          applyFontSize(state.fontSize);
        }
      },
    },
  ),
);
