import { Header } from "@/components/header";
import { VisionPanel } from "@/components/vision-panel";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <VisionPanel />

      <Header />

      <main className="max-desktop:pt-10 max-mobile:pb-12 max-mobile:pt-8 z-3 grow pt-14 pb-22">
        {children}
      </main>
    </>
  );
}
