import { Pagination } from "@/components/pagination";
import { MemberItem } from "@/components/member-item";
import { ChamberMembersFilter } from "@/modules/chamber-members-page";
import { PADDING_PUBLIC_ROUTES } from "@/shared/const/constants.const";
import { getRouteChamberMembers } from "@/shared/const/route.const";
import { cn, pathImage } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import { ChamberMember } from "@/shared/services/get-chamber-members";

function getFullName(member: ChamberMember) {
  return [member.last_name, member.first_name].filter(Boolean).join(" ").trim();
}

function groupMembersByLetter(members: ChamberMember[]) {
  const grouped = new Map<string, ChamberMember[]>();

  for (const member of members) {
    const letter = member.last_name?.trim()?.[0]?.toUpperCase() || "#";

    if (!grouped.has(letter)) {
      grouped.set(letter, []);
    }

    grouped.get(letter)!.push(member);
  }

  return Array.from(grouped.entries())
    .sort(([a], [b]) => a.localeCompare(b, "ru"))
    .map(([letter, members]) => ({
      letter,
      members,
    }));
}

const ChamberMembersPage = ({
  members,
  currentPage,
  totalPages,
}: {
  members: ChamberMember[];
  currentPage: number;
  totalPages: number;
}) => {
  const groupedMembers = groupMembersByLetter(members);

  return (
    <section>
      <ChamberMembersFilter />

      <Container
        className={cn(
          PADDING_PUBLIC_ROUTES,
          "max-mobile:gap-12 flex flex-col gap-14",
        )}
      >
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

        {groupedMembers.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <Typography variant="subtitle-serif-l" tag="p">
              Список пуст
            </Typography>
          </div>
        ) : (
          <div className="flex flex-col gap-14">
            {groupedMembers.map((group) => (
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
                    <MemberItem
                      key={member.id}
                      image={pathImage(member.avatar?.id ?? "")}
                      name={getFullName(member)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={getRouteChamberMembers()}
        />
      </Container>
    </section>
  );
};

export { ChamberMembersPage };
