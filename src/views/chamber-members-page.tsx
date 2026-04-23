import { ChamberMembersFilter } from "@/modules/chamber-members-page";
import { PADDING_PUBLIC_ROUTES } from "@/shared/const/constants.const";
import { members, People } from "@/shared/const/mock/chamberPeople.mock";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

type MembersGroup = {
  letter: string;
  members: People[];
};

function getSurnameLetter(fullFio: string) {
  return fullFio.trim()[0]?.toUpperCase() || "#";
}

function groupMembersByLetter(data: People[]): MembersGroup[] {
  const grouped = new Map<string, People[]>();

  for (const member of data) {
    const letter = getSurnameLetter(member.fullFio);

    if (!grouped.has(letter)) {
      grouped.set(letter, []);
    }

    grouped.get(letter)!.push(member);
  }

  return Array.from(grouped.entries())
    .sort(([a], [b]) => a.localeCompare(b, "ru"))
    .map(([letter, members]) => ({
      letter,
      members: members.sort((a, b) => a.fullFio.localeCompare(b.fullFio, "ru")),
    }));
}

const ChamberMembersPage = ({ letter }: { letter?: string }) => {
  const normalizedLetter = letter?.trim()?.toUpperCase();

  const filteredMembers = normalizedLetter
    ? members.filter(
        (member) => getSurnameLetter(member.fullFio) === normalizedLetter,
      )
    : members;

  const groupedMembers = groupMembersByLetter(filteredMembers);

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
                  <div
                    key={member.id}
                    className="max-mobile:gap-4 flex items-center gap-8 pr-8"
                  >
                    <Image
                      src={member.image}
                      width={112}
                      height={112}
                      alt={member.fullFio}
                      className="shrink-0 rounded-[4px] object-cover"
                    />

                    <div className="flex flex-col gap-1">
                      <Typography variant="header-s" tag="p">
                        {member.fullFio}
                      </Typography>

                      {member.position && (
                        <Typography
                          className="text-text-secondary"
                          variant="body-s"
                          tag="p"
                        >
                          {member.position}
                        </Typography>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {groupedMembers.length === 0 && (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <Typography variant="subtitle-serif-l" tag="p">
                Список пуст
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { ChamberMembersPage };
