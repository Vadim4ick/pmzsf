import { cn } from "@/shared/lib/utils";
import { memo } from "react";

const Burger = memo(
  ({ menuOpen, onClick }: { menuOpen: boolean; onClick: () => void }) => {
    return (
      <button
        onClick={onClick}
        // onClick={() => setMenuOpen((v) => !v)}
        aria-label="Меню"
        aria-expanded={menuOpen}
        className="bg-background-default/80 hover:bg-background-secondary flex size-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full backdrop-blur-sm transition-colors"
      >
        <span
          className={cn(
            "block h-[1.5px] w-5 origin-center bg-current transition-all duration-300",
            menuOpen && "translate-y-[6.5px] rotate-45",
          )}
        />
        <span
          className={cn(
            "block h-[1.5px] w-5 bg-current transition-all duration-300",
            menuOpen && "scale-x-0 opacity-0",
          )}
        />
        <span
          className={cn(
            "block h-[1.5px] w-5 origin-center bg-current transition-all duration-300",
            menuOpen && "-translate-y-[6.5px] -rotate-45",
          )}
        />
      </button>
    );
  },
);

export { Burger };

Burger.displayName = "Burger";
