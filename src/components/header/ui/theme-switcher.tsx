"use client";

import { ThemeToggle } from "@/shared/ui/theme-toggler";
import { memo, useEffect, useState } from "react";

const ThemeSwitcher = memo(() => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return <ThemeToggle checked={isDark} onChange={setIsDark} />;
});

export { ThemeSwitcher };

ThemeSwitcher.displayName = "ThemeSwitcher";
