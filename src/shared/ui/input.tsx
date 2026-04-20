// import * as React from "react";

// import { cn } from "@/shared/lib/utils";

// function Input({ className, type, ...props }: React.ComponentProps<"input">) {
//   return (
//     <input
//       type={type}
//       data-slot="input"
//       className={cn(
//         "file:text-foreground placeholder:text-text-secondary disabled:bg-input/50 dark:aria-invalid:ring-destructive/40 border-icon-primary-inverse dark:border-border-secondary h-8 w-full min-w-0 rounded-[6px] border bg-transparent px-4 py-1 text-base text-[16px] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

// export { Input };

import * as React from "react";

import { cn } from "@/shared/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  rightIcon?: React.ReactNode;
}

function Input({ className, type, rightIcon, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-text-secondary disabled:bg-input/50 dark:aria-invalid:ring-destructive/40 border-icon-primary-inverse dark:border-border-secondary h-8 w-full min-w-0 rounded-[6px] border bg-transparent px-4 py-1 text-base text-[16px] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          rightIcon && "pr-10",
          className,
        )}
        {...props}
      />

      {rightIcon && (
        <span className="text-icon-primary pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 opacity-35">
          {rightIcon}
        </span>
      )}
    </div>
  );
}

export { Input };
export type { InputProps };
