import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/shared/lib/utils";
const buttonVariants = cva(
  "group/button inline-flex cursor-pointer shrink-0 items-center font-medium justify-center rounded-[6px] border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: [
          "bg-background-secondary text-text-primary",
          "hover:bg-text-accent-hover hover:text-text-primary-on-color",
          "active:bg-background-accent-active",
        ],
        secondary: [
          "bg-background-accent text-text-primary-on-color",
          "hover:bg-text-accent-hover",
          "active:bg-background-accent-active",
        ],
        tertiary: [
          "bg-transparent border-border-primary border-2",
          "hover:text-text-accent-hover hover:border-border-accent-hover",
          "active:text-text-accent-active active:border-border-accent-active",
        ],
      },
      size: {
        default:
          "h-10 gap-2 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  icon,
  iconPosition = "start",
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  const isIconOnly = size === "icon";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-icon={!isIconOnly && icon ? `inline-${iconPosition}` : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isIconOnly ? (
        icon
      ) : (
        <>
          {icon && iconPosition === "start" && (
            <span data-icon="inline-start" className="inline-flex shrink-0">
              {icon}
            </span>
          )}
          {children}
          {icon && iconPosition === "end" && (
            <span data-icon="inline-end" className="inline-flex shrink-0">
              {icon}
            </span>
          )}
        </>
      )}
    </Comp>
  );
}
export { Button, buttonVariants };
export type { ButtonProps };
