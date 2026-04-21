import { MONTHS } from "@/shared/const/constants.const";
import { Container } from "@/shared/ui/container";

const CreateReports = ({ year, month }: { year: string; month: string }) => {
  return (
    <section>
      <Container className="max-mobile:gap-8 flex flex-col gap-10">
        {`Отчёт за ${MONTHS[+month - 1]} ${year}`}
      </Container>
    </section>
  );
};

export { CreateReports };
