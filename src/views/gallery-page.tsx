import { Pagination } from "@/components/pagination";
import { GalleryCard, GalleryFilter } from "@/modules/gallery-page";
import { PADDING_PUBLIC_ROUTES } from "@/shared/const/constants.const";
import { getRouteGallery } from "@/shared/const/route.const";
import { GetVeteransPageQuery } from "@/shared/graphql/__generated__";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";

const GalleryPage = ({
  veterans,
  currentPage,
  totalPages,
}: {
  veterans: GetVeteransPageQuery["veterans"];
  currentPage: number;
  totalPages: number;
}) => {
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
          {veterans.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <Typography variant="subtitle-serif-l" tag="p">
                Список пуст
              </Typography>
            </div>
          ) : (
            veterans.map((person) => (
              <GalleryCard key={person.id} item={person} />
            ))
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={getRouteGallery()}
        />
      </Container>
    </section>
  );
};

export { GalleryPage };
