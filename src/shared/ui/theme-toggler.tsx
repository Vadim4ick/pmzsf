import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { Typography } from "./typography";

interface ThemeToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (isDark: boolean) => void;
  className?: string;
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"
        fill="#1a2236"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill="#f59e0b" />
      <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="16.95" y2="7.05" />
        <line x1="7.05" y1="16.95" x2="4.93" y2="19.07" />
      </g>
    </svg>
  );
}

function ThemeToggle({
  checked,
  defaultChecked = true,
  onChange,
  className,
}: ThemeToggleProps) {
  const [isDark, setIsDark] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const active = isControlled ? checked : isDark;

  const handleClick = () => {
    const next = !active;
    if (!isControlled) setIsDark(next);
    onChange?.(next);
  };

  return (
    <div className="flex items-center gap-2">
      <Typography className="text-text-secondary" variant="button-m" tag="p">
        {active ? "Ночной режим" : "Дневной режим"}
      </Typography>

      <button
        type="button"
        role="switch"
        aria-checked={active}
        aria-label="Переключить тему"
        onClick={handleClick}
        className={cn(
          "relative h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border transition-colors duration-500 outline-none",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          active
            ? "border-white/10 bg-[#1a2236]"
            : "border-black/10 bg-[#d4e8f7]",
          className,
        )}
      >
        {/* Stars — dark mode */}
        <span
          className={cn(
            "absolute inset-0 overflow-hidden rounded-full transition-opacity duration-300",
            active ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
        >
          <span className="absolute top-[4px] left-[24px] h-[2px] w-[2px] rounded-full bg-white/80" />
          <span className="absolute top-[8px] left-[30px] h-[1.5px] w-[1.5px] rounded-full bg-white/60" />
          <span className="absolute top-[14px] left-[26px] h-[1.5px] w-[1.5px] rounded-full bg-white/70" />
        </span>

        {/* Clouds — light mode */}
        <span
          className={cn(
            "absolute inset-0 overflow-hidden rounded-full transition-opacity duration-300",
            active ? "opacity-0" : "opacity-100",
          )}
          aria-hidden
        >
          <span className="absolute top-[5px] right-[4px] h-[5px] w-[12px] rounded-full bg-white/60" />
          <span className="absolute right-[8px] bottom-[5px] h-[4px] w-[8px] rounded-full bg-white/40" />
        </span>

        {/* Thumb: 20×20, positioned top:2 left:2, translates 16px to the right */}
        <span
          className={cn(
            "absolute top-[2px] left-[2px] flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full transition-all duration-400",
            active
              ? "translate-x-0 bg-white"
              : "translate-x-[16px] bg-amber-50",
          )}
          style={{
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <span
            className={cn(
              "absolute transition-all duration-300",
              active
                ? "scale-100 rotate-0 opacity-100"
                : "scale-50 rotate-90 opacity-0",
            )}
          >
            <MoonIcon />
          </span>
          <span
            className={cn(
              "absolute transition-all duration-300",
              active
                ? "scale-50 -rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100",
            )}
          >
            <SunIcon />
          </span>
        </span>
      </button>
    </div>
  );
}

export { ThemeToggle };
export type { ThemeToggleProps };
