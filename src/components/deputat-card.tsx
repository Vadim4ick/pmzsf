"use client";

import {
  getRouteBiography,
  getRouteCommitteesById,
} from "@/shared/const/route.const";
import {
  Committees,
  committees as committeesMock,
} from "@/shared/const/mock/chamberPeople.mock";
import { Pluce } from "@/shared/icons/pluce";
import { cn, pathImage } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useMemo, useState } from "react";

type DeputatCardProps = {
  fullFio: string;
  position: string;
  image?: string;
  id: number;
  authorityDate: string;
  committees: number[];
};

const DeputatCard = memo(
  ({
    fullFio,
    position,
    image,
    authorityDate,
    id,
    committees,
  }: DeputatCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const resolvedCommittees = useMemo(() => {
      return committees
        .map((committeeId) =>
          committeesMock.find((committee) => committee.id === committeeId),
        )
        .filter((committee): committee is Committees => Boolean(committee));
    }, [committees]);

    const hasCommittees = resolvedCommittees.length > 0;

    return (
      <div className="bg-background-primary flex flex-col overflow-hidden rounded-[12px]">
        <div className="flex flex-col gap-6 p-6 sm:p-8 md:grid md:grid-cols-[225px_1fr] md:gap-8 md:p-12 lg:grid-cols-[225px_1fr_215px]">
          <div className="max-mobile:h-[300px] relative h-[224px] w-full overflow-hidden rounded-[6px]">
            <Image
              src={image ?? "/img/noimage.png"}
              fill
              alt={fullFio}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Typography variant="header-l" tag="h3">
                {fullFio}
              </Typography>

              <Typography variant="subtitle-serif-s" tag="p">
                {position}
              </Typography>
            </div>

            <Link href={getRouteBiography(String(id))}>
              <Button className="w-fit">О персоне</Button>
            </Link>
          </div>

          <div className="flex flex-row items-center justify-between gap-4 max-lg:col-start-2 lg:flex-col lg:items-end lg:justify-between">
            <div className="flex flex-col lg:items-end">
              {authorityDate ? (
                <>
                  <Typography
                    className="text-text-secondary"
                    variant="body-s"
                    tag="p"
                  >
                    в полномочиях
                  </Typography>

                  <Typography variant="body-m-strong" tag="span">
                    с {authorityDate}
                  </Typography>
                </>
              ) : null}
            </div>

            {hasCommittees ? (
              <div className="flex items-center gap-2">
                <Typography
                  className="text-text-disabled"
                  variant="body-l"
                  tag="span"
                >
                  Комитеты
                </Typography>

                <Button
                  variant="tertiary"
                  onClick={() => setIsOpen((prev) => !prev)}
                  size="icon"
                  icon={
                    <Pluce
                      className={cn("size-5 transition-all", {
                        "rotate-45": isOpen,
                      })}
                    />
                  }
                />
              </div>
            ) : null}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && hasCommittees ? (
            <motion.div
              key="committees"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="border-border-secondary grid grid-cols-1 gap-6 border-t px-6 py-8 sm:grid-cols-2 sm:px-8 md:px-12 md:pb-12 lg:grid-cols-3">
                {resolvedCommittees.map((committee, idx) => (
                  <Link
                    href={getRouteCommitteesById(String(committee.id))}
                    key={committee.id}
                    className={cn("flex flex-col gap-2", {
                      "border-border-secondary lg:border-r lg:pr-8":
                        idx !== resolvedCommittees.length - 1,
                    })}
                  >
                    <Typography variant="body-m-strong" tag="p">
                      {committee.title}
                    </Typography>

                    <Typography
                      className="text-text-secondary"
                      variant="body-m"
                      tag="span"
                    >
                      {committee.chairman.fullFio}
                    </Typography>
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    );
  },
);

DeputatCard.displayName = "DeputatCard";

export { DeputatCard };
