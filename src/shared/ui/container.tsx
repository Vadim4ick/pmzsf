import { cn } from "../lib/utils";

const Container = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={style} className={cn("mx-auto max-w-334 px-4", className)}>
      {children}
    </div>
  );
};

export { Container };
