import { COMMITTEES, CommitteesCard } from "@/modules/committees-page";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const CommitteesPage = () => {
  return (
    <section>
      <Container className="max-mobile:gap-8 flex flex-col gap-14">
        <Typography variant="header-xxl" tag="h1">
          Комитеты
        </Typography>

        <div className="max-mobile:grid-cols-1 max-mobile:gap-8 grid grid-cols-2 gap-10">
          {COMMITTEES.map((committee) => (
            <CommitteesCard key={committee.id} item={committee} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { CommitteesPage };
