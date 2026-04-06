"use client";

import { ThemeToggle } from "@/shared/ui/theme-toggler";
import { memo, useState } from "react";

const ThemeSwitcher = memo(() => {
  const [isDark, setIsDark] = useState(true);

  return <ThemeToggle checked={isDark} onChange={setIsDark} />;
});

export { ThemeSwitcher };

ThemeSwitcher.displayName = "ThemeSwitcher";
