import { DeputatCard } from "@/components/deputat-card/deputat-card";
import { ExpertCard, EXPERTS, STRUCTURE_EXPERT } from "@/modules/expert-advice";
import { Search } from "@/shared/icons/search";
import { Container } from "@/shared/ui/container";
import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";

const ExpertAdvicePage = () => {
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

            <Search className="border-border-secondary absolute top-1/2 right-4 size-5 -translate-y-1/2 border" />
          </div>
        </div>

        <div className="flex flex-col gap-16 pt-10">
          {STRUCTURE_EXPERT.map((group, idx) => (
            <DeputatCard key={idx} card={group} />
          ))}
        </div>

        <div className="flex flex-col gap-10 pt-16">
          <Typography variant="header-m-caps" tag="h3">
            Члены совета
          </Typography>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(296px,1fr))] gap-10">
            {EXPERTS.map((item) => (
              <ExpertCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { ExpertAdvicePage };
