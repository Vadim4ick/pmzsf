import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { People } from "@/shared/const/mock/chamberPeople.mock";

const BiographyForm = ({ member }: { member: People }) => {
  const telegramLink = member.socialAccounts?.find(
    (item) => item.includes("t.me") || item.includes("telegram"),
  );

  const vkLink = member.socialAccounts?.find((item) => item.includes("vk.com"));

  const committeesText =
    member.committees && member.committees.length > 0
      ? member.committees.join(", ")
      : null;

  return (
    <div className="bg-background-primary max-desktop1250:px-8 max-mobile:p-8 flex flex-col gap-10 rounded-[16px] p-16">
      <div className="max-desktop:gap-5 max-desktop1250:grid-cols-[350px_1fr] max-mobile:gap-8 max-tablet:grid-cols-1 grid grid-cols-[500px_1fr] gap-10">
        <div className="desktop1250:min-h-[450px] desktop1250:max-h-[550px] max-desktop1250:h-[400px] max-tablet:h-[500px] max-mobile:h-[400px] relative h-full overflow-hidden rounded-[12px]">
          <Image
            src={member.image || "/images/placeholder-person.jpg"}
            fill
            alt={member.fullFio}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <Typography variant="subtitle-serif-l" tag="h3">
            {member.position}
          </Typography>

          <Typography variant="header-l" tag="h2">
            {member.fullFio}
          </Typography>

          <div className="flex flex-col gap-4">
            {member.biography?.birth?.date && (
              <div className="flex flex-col gap-1.5">
                <Typography
                  className="text-text-secondary"
                  variant="body-m"
                  tag="span"
                >
                  Дата рождения
                </Typography>

                <Typography variant="body-m-strong" tag="p">
                  {member.biography.birth.date}
                </Typography>
              </div>
            )}

            {committeesText && (
              <div className="flex flex-col gap-1.5">
                <Typography
                  className="text-text-secondary"
                  variant="body-m"
                  tag="span"
                >
                  Комитет
                </Typography>

                <Typography variant="body-m-strong" tag="p">
                  {committeesText}
                </Typography>
              </div>
            )}

            {member.workPlace && (
              <div className="flex flex-col gap-1.5">
                <Typography
                  className="text-text-secondary"
                  variant="body-m"
                  tag="span"
                >
                  Место работы
                </Typography>

                <Typography variant="body-m-strong" tag="p">
                  {member.workPlace}
                </Typography>
              </div>
            )}

            {member.region && (
              <div className="flex flex-col gap-1.5">
                <Typography
                  className="text-text-secondary"
                  variant="body-m"
                  tag="span"
                >
                  Субъект РФ
                </Typography>

                <Typography variant="body-m-strong" tag="p">
                  {member.region}
                </Typography>
              </div>
            )}

            {member.delegatedBy && (
              <div className="flex flex-col gap-1.5">
                <Typography
                  className="text-text-secondary"
                  variant="body-m"
                  tag="span"
                >
                  Какой орган государственной власти направил в ПМЗ
                </Typography>

                <Typography variant="body-m-strong" tag="p">
                  {member.delegatedBy}
                </Typography>
              </div>
            )}

            {member.authorityDate && (
              <div className="flex flex-col gap-1.5">
                <Typography
                  className="text-text-secondary"
                  variant="body-m"
                  tag="span"
                >
                  Дата наделения полномочиями
                </Typography>

                <Typography variant="body-m-strong" tag="p">
                  {member.authorityDate}
                </Typography>
              </div>
            )}
          </div>

          {(telegramLink || vkLink) && (
            <div className="flex items-center gap-2.5">
              {telegramLink && (
                <a
                  href={
                    telegramLink.startsWith("http")
                      ? telegramLink
                      : `https://${telegramLink}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
                >
                  <Tg />
                </a>
              )}

              {vkLink && (
                <a
                  href={
                    vkLink.startsWith("http") ? vkLink : `https://${vkLink}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
                >
                  <Vk />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* <BiographyTabs  /> */}
    </div>
  );
};

export { BiographyForm };
