import { mockNews } from "@/shared/const/mockNews.const";
import { NewsItemPage } from "@/views/news-item-page";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  const news = mockNews.find((item) => item.id === Number(id));

  if (!news) {
    return {
      title: "Новость не найдена",
    };
  }

  return {
    title: news.title,
  };
}

const NewsItem = () => {
  return <NewsItemPage />;
};

export default NewsItem;
