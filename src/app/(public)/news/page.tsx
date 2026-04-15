import { gql } from "@/shared/graphql/client";
import { NewsPage } from "@/views/news-page";

const PER_PAGE = 5;

export const revalidate = 60;

const News = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page ?? 1));

  const allNews = await gql.GetAllNews({
    limit: PER_PAGE,
    page: currentPage,
  });

  const totalItems = allNews.news_aggregated?.[0]?.count?.id ?? 0;
  const totalPages = Math.ceil(totalItems / PER_PAGE);

  return (
    <NewsPage
      news={allNews.news}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default News;
