import { getNewsById } from "@/shared/actions/news";
import { NewsItemPage } from "@/views/news-item-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  const news = await getNewsById(id);

  if (!news) {
    return {
      title: "Новость не найдена",
    };
  }

  return {
    title: news.news_by_id.title,
  };
}

export const revalidate = 60;

const NewsItem = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const news = await getNewsById(id);

  if (!news) {
    return notFound();
  }

  return <NewsItemPage news={news.news_by_id} />;
};

export default NewsItem;
