import { Gallery } from "@/shared/types/gallery.type";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const GalleryCard = ({ item }: { item: Gallery }) => {
  return (
    <article
      key={item.id}
      className="max-tablet:flex-col border-border-secondary max-mobile:pb-6 flex gap-8 border-b pb-12"
    >
      <Image
        width={300}
        height={300}
        alt={item.name}
        src={item.image}
        className="max-tablet:w-full max-mobile:h-[350px] max-tablet:max-w-none max-tablet:h-[450px] w-[300px] shrink-0 rounded-[6px] object-cover"
      />

      <div className="flex flex-col gap-6">
        <Typography variant="header-l" tag="h3">
          {item.name}
        </Typography>

        <div className="max-mobile:flex-col flex gap-8">
          <div className="flex flex-col gap-2">
            <Typography
              variant="body-m"
              className="text-text-secondary"
              tag="span"
            >
              Дата рождения
            </Typography>
            <Typography variant="body-m-strong" tag="p">
              {item.birthDate}
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <Typography
              variant="body-m"
              className="text-text-secondary"
              tag="span"
            >
              Место рождения
            </Typography>
            <Typography variant="body-m-strong" tag="p">
              {item.birthPlace}
            </Typography>
          </div>
        </div>

        <Typography variant="body-serif" tag="p">
          {item.description}
        </Typography>
      </div>
    </article>
  );
};

export { GalleryCard };
