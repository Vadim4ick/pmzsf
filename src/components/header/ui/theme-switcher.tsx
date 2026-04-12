"use client";

import { useThemeStore } from "@/store/theme.store";
import { ThemeToggle } from "@/shared/ui/theme-toggler";
import { memo, useEffect } from "react";

const ThemeSwitcher = memo(() => {
  const { isDark, setDark } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return <ThemeToggle checked={isDark} onChange={setDark} />;
});

ThemeSwitcher.displayName = "ThemeSwitcher";

export { ThemeSwitcher };
