import { DeputatCard } from "@/components/deputat-card/deputat-card";
import { GetExpertAdvicePageQuery } from "@/shared/graphql/__generated__";
import { Search } from "@/shared/icons/search";
import { getPlainMembers, groupHierarchyMembers } from "@/shared/lib/hierarchy";
import { pathImage } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const ExpertAdvicePage = ({
  expertAdvice,
}: {
  expertAdvice: GetExpertAdvicePageQuery["expert_advice"];
}) => {
  const members = getPlainMembers(expertAdvice.members);
  const grouped = groupHierarchyMembers(expertAdvice.members);

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10">
          <Typography variant="header-xxl" tag="h1">
            Экспертный совет
          </Typography>

          <div className="relative w-full">
            <Input
              placeholder="Введите Фалимию члена совета"
              className="bg-background-primary max-mobile:text-[16px] max-mobile:leading-6 max-mobile:h-[50px] h-[76px] w-full text-[24px] leading-7"
            />

            <Search className="absolute top-1/2 right-4 size-5 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex flex-col gap-16 pt-10">
          {grouped.map((group) => (
            <DeputatCard
              key={group.roleKey}
              role={group.role}
              users={group.users}
            />
          ))}
        </div>

        {members.length > 0 && (
          <div className="flex flex-col gap-10 pt-16">
            <Typography variant="header-m-caps" tag="h3">
              Члены совета
            </Typography>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(296px,1fr))] gap-10">
              {members.map((item) => (
                <article
                  key={item.id}
                  className="border-border-secondary flex flex-col gap-4 border-b pb-10"
                >
                  <div className="relative h-[296px] w-full overflow-hidden rounded-[6px]">
                    <Image
                      src={pathImage(item.user.avatar?.id ?? "")}
                      fill
                      alt={item.user.first_name}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography variant="header-s" tag="p">
                      {item.user.first_name} {item.user.last_name}
                    </Typography>

                    <Typography
                      className="text-text-subtle"
                      variant="subtitle-serif-s"
                      tag="p"
                    >
                      Должность
                    </Typography>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export { ExpertAdvicePage };
