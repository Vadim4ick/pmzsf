import { AllNews, NewsSubscription } from "@/modules/news-page";
// import { NewsSidebar } from "@/modules/news-page/ui/news-sidebar";
import { GetAllNewsQuery } from "@/shared/graphql/client";
import { Container } from "@/shared/ui/container";

interface NewsPageProps {
  news: GetAllNewsQuery["news"];
  currentPage: number;
  totalPages: number;
}

export const NewsPage = ({ news, currentPage, totalPages }: NewsPageProps) => {
  return (
    <>
      <section className="pb-16 md:pb-24">
        <Container className="flex flex-col gap-10 xl:grid xl:grid-cols-[1fr_296px]">
          <AllNews
            news={news}
            currentPage={currentPage}
            totalPages={totalPages}
          />
          {/* <NewsSidebar /> */}
        </Container>
      </section>
      <NewsSubscription />
    </>
  );
};
