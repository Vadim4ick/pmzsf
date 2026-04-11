import { DeputatCard } from "@/components/deputat-card/deputat-card";
import { STRUCTURE_COMMITTEE_ITEM } from "@/modules/committees-item-page";
import { getRouteCommittees } from "@/shared/const/route.const";
import { Committee } from "@/shared/types/committee.type";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";

const CommitteesItemPage = ({ committee }: { committee: Committee }) => {
  return (
    <section>
      <Container className="max-mobile:gap-8 flex flex-col gap-14">
        <Typography
          className="border-border-secondary border-b pb-8"
          variant="header-serif-xl"
          tag="h1"
        >
          {committee.title}
        </Typography>

        <div className="flex flex-col gap-16">
          {STRUCTURE_COMMITTEE_ITEM.map((group, idx) => (
            <DeputatCard key={idx} card={group} />
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <Typography variant="header-m-caps" tag="h3">
            Члены комитета
          </Typography>

          <div className="max-tablet:gap-5 max-mobile:grid-cols-1 grid grid-cols-2 gap-10">
            <article className="bg-background-primary max-mobile:flex-col flex items-center gap-8 rounded-[8px] p-4">
              <div className="max-mobile:w-full max-mobile:h-[300px] relative size-[112px] shrink-0 overflow-hidden rounded-[4px]">
                <Image
                  src={"/img/chairman.png"}
                  alt={"chairman"}
                  className="object-cover"
                  fill
                />
              </div>

              <div className="flex flex-col gap-1">
                <Typography variant="header-s" tag="h3">
                  Ивановa Марта Борисовa
                </Typography>
                <Typography variant="subtitle-serif-s" tag="span">
                  Депутат Законодательного Собрания Новосибирской области
                </Typography>
              </div>
            </article>
            <article className="bg-background-primary max-mobile:flex-col flex items-center gap-8 rounded-[8px] p-4">
              <div className="max-mobile:w-full max-mobile:h-[300px] relative size-[112px] shrink-0 overflow-hidden rounded-[4px]">
                <Image
                  src={"/img/chairman.png"}
                  alt={"chairman"}
                  className="object-cover"
                  fill
                />
              </div>

              <div className="flex flex-col gap-1">
                <Typography variant="header-s" tag="h3">
                  Ивановa Марта Борисовa
                </Typography>
                <Typography variant="subtitle-serif-s" tag="span">
                  Депутат Законодательного Собрания Новосибирской области
                </Typography>
              </div>
            </article>
          </div>

          <Link href={getRouteCommittees()}>
            <Button variant={"tertiary"} className="w-fit">
              К списку комитетов
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export { CommitteesItemPage };
