"use client";

import { getRouteBiography } from "@/shared/const/route.const";
import { Pluce } from "@/shared/icons/pluce";
import { cn, pathImage } from "@/shared/lib/utils";
import { HierarchyCardUser } from "@/shared/types/deputat.types";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";

const MemberCard = memo(({ user }: { user: HierarchyCardUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasCommittees =
    user.hierarchy_memberships && user.hierarchy_memberships.length > 0;

  const committees =
    user.hierarchy_memberships
      ?.filter((membership) => membership.committee)
      .map((membership) => {
        const chairmanUser = membership.committee?.members?.[0]?.user;

        return {
          id: membership.committee?.id,
          title: membership.committee?.title ?? "—",
          role: membership.role,
          chairman: chairmanUser
            ? `${chairmanUser.first_name} ${chairmanUser.last_name}`
            : "—",
        };
      }) ?? [];

  return (
    <div className="bg-background-primary flex flex-col overflow-hidden rounded-[12px]">
      <div className="flex flex-col gap-6 p-6 sm:p-8 md:grid md:grid-cols-[225px_1fr] md:gap-8 md:p-12 lg:grid-cols-[225px_1fr_115px]">
        <div className="max-mobile:h-[300px] relative h-[224px] w-full overflow-hidden rounded-[6px]">
          <Image
            src={pathImage(user.avatar?.id ?? "")}
            fill
            alt={user.last_name}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Typography variant="header-l" tag="h3">
              {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="subtitle-serif-s" tag="p">
              ДОЛЖНОСТЬ
            </Typography>
          </div>
          <Link href={getRouteBiography(user.id)}>
            <Button className="w-fit">О персоне</Button>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-between gap-4 max-lg:col-start-2 lg:flex-col lg:items-end lg:justify-between">
          <div className="flex flex-col lg:items-end">
            <Typography
              className="text-text-secondary"
              variant="body-s"
              tag="p"
            >
              в полномочиях
            </Typography>

            <Typography variant="body-m-strong" tag="span">
              с 2019
            </Typography>
          </div>

          {hasCommittees && (
            <div className="flex items-center gap-2">
              <Typography
                className="text-text-disabled"
                variant="body-l"
                tag="span"
              >
                Комитеты
              </Typography>

              <Button
                variant={"tertiary"}
                onClick={() => setIsOpen((prev) => !prev)}
                size={"icon"}
                icon={
                  <Pluce
                    className={cn("size-5 transition-all", {
                      "rotate-45": isOpen,
                    })}
                  />
                }
              ></Button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && hasCommittees && (
          <motion.div
            key="committees"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="border-border-secondary grid grid-cols-1 gap-6 border-t px-6 py-8 sm:grid-cols-2 sm:px-8 md:px-12 md:pb-12 lg:grid-cols-3">
              {committees.map((committee, idx) => (
                <div
                  key={idx}
                  className={cn("flex flex-col gap-2", {
                    "border-border-secondary lg:border-r lg:pr-8":
                      user.hierarchy_memberships &&
                      idx !== user.hierarchy_memberships.length - 1,
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
                    {committee.chairman}
                  </Typography>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export { MemberCard };

MemberCard.displayName = "MemberCard";
