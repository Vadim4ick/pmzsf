import { MediaPage } from "@/views/media-page";

export const metadata = {
  title: "Фото и видео",
};

export const revalidate = 60;

const Media = () => {
  return <MediaPage />;
};

export default Media;
