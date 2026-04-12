import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "../lib/utils";

const Loader = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<typeof Loader2>
>(({ className, ...props }, ref) => {
  return (
    <Loader2
      ref={ref}
      className={cn("animate-spin text-[#5D8EC9]", className)}
      {...props}
    />
  );
});

Loader.displayName = "Loader";

export { Loader };
