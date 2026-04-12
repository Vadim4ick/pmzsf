"use client";

import { Header } from "@/components/header";
import { VisionPanel } from "@/components/vision-panel";
import { PADDING_PUBLIC_ROUTES } from "@/shared/const/constants.const";
import { cn } from "@/shared/lib/utils";
import { usePathname } from "next/navigation";

const NO_PADDING_ROUTES = ["/gallery"];

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noPadding = NO_PADDING_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  return (
    <>
      <VisionPanel />

      <Header />

      <main
        className={cn(
          "max-mobile:pb-12 z-3 grow pb-22",
          !noPadding && PADDING_PUBLIC_ROUTES,
        )}
      >
        {children}
      </main>
    </>
  );
}
