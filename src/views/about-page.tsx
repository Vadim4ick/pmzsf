import { AboutContent } from "@/modules/about-page";
import { GetAboutPageQuery } from "@/shared/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const AboutPage = ({ about }: { about: GetAboutPageQuery["about"] }) => {
  return (
    <section>
      <Container className="flex flex-col gap-10">
        {about.img && about.img?.id && (
          <div className="max-tablet:h-[550px] max-mobile:h-[350px] relative h-[720px] rounded-[16px]">
            <Image
              src={pathImage(about.img.id)}
              alt="about"
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="mx-auto flex max-w-[855px] flex-col gap-8">
          <Typography variant="header-xxl" tag="h1">
            О палате
          </Typography>

          <div className="flex flex-col gap-10">
            <AboutContent content={about.about} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { AboutPage };
