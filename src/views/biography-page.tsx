import { BiographyForm } from "@/modules/biography-page";
import { People } from "@/shared/const/mock/chamberPeople.mock";
import { getRouteStructure } from "@/shared/const/route.const";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Link from "next/link";

const BiographyPage = ({ member }: { member: People }) => {
  return (
    <section>
      <Container className="max-mobile:gap-8 flex flex-col gap-10">
        <Typography variant="header-xxl" tag="h1">
          Биография
        </Typography>

        <BiographyForm member={member} />

        <Link href={getRouteStructure()}>
          <Button>К списку персон</Button>
        </Link>
      </Container>
    </section>
  );
};

export { BiographyPage };
