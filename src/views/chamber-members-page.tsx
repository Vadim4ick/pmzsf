import {
  CHAMBER_MEMBERS,
  ChamberMembersFilter,
  ChamberMembersSearch,
} from "@/modules/chamber-members-page";
import { PADDING_PUBLIC_ROUTES } from "@/shared/const/constants.const";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const ChamberMembersPage = () => {
  return (
    <section>
      <ChamberMembersFilter />

      <Container className={cn(PADDING_PUBLIC_ROUTES, "flex flex-col gap-10")}>
        <div className="flex flex-col gap-4">
          <Typography variant="header-xxl" tag="h1">
            Члены Палаты
          </Typography>

          <Typography
            className="text-text-subtle"
            variant="subtitle-serif-l"
            tag="p"
          >
            Молодых законодателей при Совете Федерации Федерального собрания
            Российской Федерации
          </Typography>
        </div>

        <ChamberMembersSearch />

        <div className="flex flex-col gap-14">
          {CHAMBER_MEMBERS.map((group) => (
            <div key={group.letter} className="flex flex-col gap-8">
              <Typography
                className="text-background-default-tertiary-hover"
                variant="header-xxl"
                tag="p"
              >
                {group.letter}
              </Typography>

              <div className="max-tablet:grid-cols-2 max-mobile:grid-cols-1 grid grid-cols-3 gap-8">
                {group.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-8 pr-8">
                    <Image
                      src={member.image}
                      width={112}
                      height={112}
                      alt={member.name}
                      className="rounded-[4px] object-cover"
                    />
                    <Typography variant="header-s" tag="p">
                      {member.name}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { ChamberMembersPage };
