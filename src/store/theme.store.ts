import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  isDark: boolean;
  toggle: () => void;
  setDark: (value: boolean) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: false,
      toggle: () => set((s) => ({ isDark: !s.isDark })),
      setDark: (value) => set({ isDark: value }),
    }),
    {
      name: "theme",
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.classList.toggle("dark", state.isDark);
        }
      },
    },
  ),
);
