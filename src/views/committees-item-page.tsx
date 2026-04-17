import { DeputatCard } from "@/components/deputat-card/deputat-card";
import { getRouteCommittees } from "@/shared/const/route.const";
import { GetCommitteeByIdQuery } from "@/shared/graphql/__generated__";
import { getPlainMembers, groupHierarchyMembers } from "@/shared/lib/hierarchy";
import { pathImage } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import Link from "next/link";

const CommitteesItemPage = ({
  committee,
}: {
  committee: GetCommitteeByIdQuery["committees_by_id"];
}) => {
  const members = getPlainMembers(committee.members);
  const grouped = groupHierarchyMembers(committee.members);

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
          {grouped.map((group) => (
            <DeputatCard
              key={group.roleKey}
              role={group.role}
              users={group.users}
            />
          ))}
        </div>

        {members.length > 0 && (
          <div className="flex flex-col gap-10">
            <Typography variant="header-m-caps" tag="h3">
              Члены комитета
            </Typography>

            <div className="max-tablet:gap-5 max-mobile:grid-cols-1 grid grid-cols-2 gap-10">
              {members.map((member) => (
                <article
                  key={member.id}
                  className="bg-background-primary max-mobile:flex-col flex items-center gap-8 rounded-[8px] p-4"
                >
                  <div className="max-mobile:w-full max-mobile:h-[300px] relative size-[112px] shrink-0 overflow-hidden rounded-[4px]">
                    <Image
                      src={pathImage(member.user.avatar?.id)}
                      alt={member.user.first_name}
                      className="object-cover"
                      fill
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Typography variant="header-s" tag="h3">
                      {member.user.first_name} {member.user.last_name}
                    </Typography>

                    <Typography variant="subtitle-serif-s" tag="span">
                      ДОЛЖНОСТЬ
                    </Typography>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <Link href={getRouteCommittees()}>
          <Button variant="tertiary" className="w-fit">
            К списку комитетов
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export { CommitteesItemPage };
