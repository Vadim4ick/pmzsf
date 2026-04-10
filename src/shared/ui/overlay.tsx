import { cn } from "../lib/utils";

const Overlay = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "desktop:hidden fixed inset-0 z-40 bg-black/10 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-xs",
        className,
      )}
    />
  );
};

export { Overlay };
