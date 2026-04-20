import { PADDING_PUBLIC_ROUTES } from "@/shared/const/constants.const";
import { cn } from "@/shared/lib/utils";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={cn("max-mobile:pb-12 z-3 grow pb-22", PADDING_PUBLIC_ROUTES)}
    >
      {children}
    </main>
  );
}
