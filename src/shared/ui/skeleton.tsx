import { cn } from "../lib/utils";

export const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "bg-background-secondary animate-pulse rounded-md",
      className,
    )}
  />
);
