import { AllNews, NewsSubscription } from "@/modules/news-page";
import { NewsSidebar } from "@/modules/news-page/ui/news-sidebar";
import { Container } from "@/shared/ui/container";

const NewsPage = () => {
  return (
    <>
      <section className="pb-16 md:pb-24">
        <Container className="flex flex-col gap-10 xl:grid xl:grid-cols-[1fr_296px]">
          <AllNews />

          <NewsSidebar />
        </Container>
      </section>

      <NewsSubscription />
    </>
  );
};

export { NewsPage };
