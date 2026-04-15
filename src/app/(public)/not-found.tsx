"use client";
import Link from "next/link";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { getRouteHome } from "@/shared/const/route.const";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-12 py-20 text-center">
      <div className="relative select-none">
        <Typography
          tag="p"
          variant="header-xxl"
          className="text-background-secondary text-[180px]! leading-none font-bold sm:text-[260px]!"
        >
          404
        </Typography>

        <div className="absolute inset-0 flex items-center justify-center">
          <Typography
            tag="p"
            variant="header-m-caps"
            className="text-text-accent"
          >
            Страница не найдена
          </Typography>
        </div>
      </div>

      <div className="flex max-w-[480px] flex-col gap-4">
        <Typography
          variant="subtitle-serif-l"
          tag="p"
          className="text-text-subtle"
        >
          Возможно, страница была удалена, перемещена или никогда не
          существовала
        </Typography>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="secondary">
          <Link href={getRouteHome()}>На главную</Link>
        </Button>

        <Button onClick={() => router.back()} variant="tertiary">
          Вернуться назад
        </Button>
      </div>

      <div className="flex w-full max-w-[600px] items-center gap-4">
        <div className="bg-border-secondary h-px flex-1" />
        <Typography
          variant="body-s"
          tag="span"
          className="text-text-disabled shrink-0"
        >
          Палата молодых законодателей
        </Typography>
        <div className="bg-border-secondary h-px flex-1" />
      </div>
    </Container>
  );
};

export default NotFound;
