"use client";

import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { RegionPicker } from "./region-picker";
import { useGetNewsByRegion } from "@/shared/services/news.service";
import { useGetRepresentativesByRegion } from "@/shared/services/representatives.service";
import { getRouteNewsById } from "@/shared/const/route.const";
import { dateFormatter, pathImage } from "@/shared/lib/utils";
import { memo, useState } from "react";
import { Skeleton } from "@/shared/ui/skeleton";
import { GetAllRegionsQuery } from "@/shared/graphql/__generated__";

const InfoRegions = memo(
  ({ regions }: { regions: GetAllRegionsQuery["regions"] }) => {
    const [selectedCode, setSelectedCode] = useState("RU-MOW");

    const { data: news, isLoading: isLoadingNews } =
      useGetNewsByRegion(selectedCode);
    const { data: representatives, isLoading: isLoadingRepresentatives } =
      useGetRepresentativesByRegion(selectedCode);

    return (
      <>
        <section className="pb-10">
          <Container>
            <div className="max-tablet:grid-cols-1 max-tablet:gap-8 grid grid-cols-2 gap-4">
              <div className="desktop:gap-14 flex flex-col justify-between gap-8">
                <Typography variant="header-l" tag="h2">
                  Представители в регионах
                </Typography>

                {isLoadingRepresentatives ? (
                  <RepresentativesSkeleton />
                ) : representatives?.representatives?.length ? (
                  <div className="flex flex-col gap-6">
                    {representatives.representatives.map((rep) => (
                      <article key={rep.id} className="flex items-center gap-6">
                        <div className="size-[112px] shrink-0">
                          <Image
                            src={pathImage(rep.photo.id)}
                            alt={rep.fullName}
                            className="rounded-[6px] object-cover"
                            width={112}
                            height={112}
                            unoptimized
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Typography variant="header-s" tag="h3">
                            {rep.fullName}
                          </Typography>
                          {rep.position && (
                            <Typography
                              className="text-text-primary"
                              variant="subtitle-serif-s"
                              tag="span"
                            >
                              {rep.position}
                            </Typography>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <Typography
                    variant="header-m"
                    className="text-text-secondary"
                  >
                    В данном регионе представители не найдены
                  </Typography>
                )}

                <Button className="w-fit">Деятельность в регионе</Button>
              </div>

              <div>
                <RegionPicker
                  setSelectedCode={setSelectedCode}
                  selectedCode={selectedCode}
                  regions={regions}
                />
              </div>
            </div>
          </Container>
        </section>

        {isLoadingNews ? (
          <NewsSkeleton />
        ) : (
          news &&
          news.news.length > 0 && (
            <section className="desktop:pb-24 mobile:pb-16 pb-12">
              <Container className="desktop:gap-14 flex flex-col gap-8">
                <Typography variant="header-l" tag="h2">
                  Новости региона
                </Typography>

                <div className="max-mobile:grid-cols-1 grid grid-cols-2 gap-x-10 gap-y-8">
                  {news.news.map((item) => (
                    <Link
                      key={item.id}
                      href={getRouteNewsById(String(item.id))}
                      className="border-border-secondary group flex flex-col gap-6 border-b pb-8"
                    >
                      <Typography
                        className="group-hover:text-text-accent line-clamp-4 transition-all"
                        variant="subtitle-serif-l"
                        tag="p"
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        className="text-text-secondary"
                        variant="body-s-strong"
                        tag="span"
                      >
                        {dateFormatter(item.date_created)}
                      </Typography>
                    </Link>
                  ))}
                </div>
              </Container>
            </section>
          )
        )}
      </>
    );
  },
);

export { InfoRegions };

const RepresentativesSkeleton = () => (
  <div className="flex flex-col gap-6">
    {Array.from({ length: 2 }).map((_, i) => (
      <div key={i} className="flex items-center gap-6">
        <Skeleton className="size-[112px] shrink-0 rounded-[6px]" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
      </div>
    ))}
  </div>
);

const NewsSkeleton = () => (
  <section className="desktop:pb-24 mobile:pb-16 pb-12">
    <Container className="desktop:gap-14 flex flex-col gap-8">
      <Skeleton className="h-9 w-56" />
      <div className="max-mobile:grid-cols-1 grid grid-cols-2 gap-x-10 gap-y-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border-border-secondary flex flex-col gap-6 border-b pb-8"
          >
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-5 w-3/5" />
            </div>
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

InfoRegions.displayName = "InfoRegions";
