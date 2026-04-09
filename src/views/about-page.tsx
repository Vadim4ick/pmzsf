import { AboutContent } from "@/modules/about-page";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section>
      <Container className="flex flex-col gap-10">
        <div className="max-tablet:h-[550px] max-mobile:h-[350px] relative h-[720px] rounded-[16px]">
          <Image
            src={"/img/about.png"}
            alt="about"
            fill
            className="object-cover"
          />
        </div>

        <div className="mx-auto flex max-w-[855px] flex-col gap-8">
          <Typography variant="header-xxl" tag="h1">
            О палате
          </Typography>

          <div className="flex flex-col gap-10">
            <AboutContent />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { AboutPage };
