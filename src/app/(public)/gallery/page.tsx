import { gql } from "@/shared/graphql/client";
import { GalleryPage } from "@/views/gallery-page";

export const metadata = {
  title: "Галерея победы",
};

const PER_PAGE = 10;

export const revalidate = 60;

const Gallery = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; letter?: string }>;
}) => {
  const { page, letter } = await searchParams;
  const currentPage = Math.max(1, Number(page ?? 1));

  const data = letter
    ? await gql.GetVeteransByLetter({
        letter,
        page: currentPage,
        limit: PER_PAGE,
      })
    : await gql.GetVeteransPage({ page: currentPage, limit: PER_PAGE });

  const totalItems = data.veterans_aggregated?.[0]?.count?.id ?? 0;
  const totalPages = Math.ceil(totalItems / PER_PAGE);

  return (
    <GalleryPage
      veterans={data.veterans}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default Gallery;
