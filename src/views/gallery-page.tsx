import {
  GALLERY_ITEMS,
  GalleryCard,
  GalleryFilter,
} from "@/modules/gallery-page";
import { PADDING_PUBLIC_ROUTES } from "@/shared/const/constants.const";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const GalleryPage = () => {
  return (
    <section>
      <GalleryFilter />

      <Container
        className={cn(
          PADDING_PUBLIC_ROUTES,
          "max-mobile:gap-12 flex flex-col gap-14",
        )}
      >
        <Typography variant="header-xxl" tag="h1">
          Галерея победы
        </Typography>

        <div className="max-mobile:pb-6 flex flex-col gap-10">
          {GALLERY_ITEMS.map((person) => (
            <GalleryCard key={person.id} item={person} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { GalleryPage };
