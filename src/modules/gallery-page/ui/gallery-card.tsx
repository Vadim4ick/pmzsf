import { VeteransFragmentFragment } from "@/shared/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { getFullNameVeteran } from "../model/gallery.const";

const GalleryCard = ({ item }: { item: VeteransFragmentFragment }) => {
  return (
    <article
      key={item.id}
      className="max-tablet:flex-col border-border-secondary max-mobile:pb-6 flex gap-8 border-b pb-12"
    >
      {item.photo && (
        <Image
          width={300}
          height={300}
          alt={item.last_name}
          src={pathImage(item.photo.id)}
          className="max-tablet:w-full max-mobile:h-[350px] max-tablet:max-w-none max-tablet:h-[450px] w-[300px] shrink-0 rounded-[6px] object-cover"
        />
      )}

      <div className="flex flex-col gap-6">
        <Typography variant="header-l" tag="h3">
          {getFullNameVeteran(item)}
        </Typography>

        <div className="flex flex-col gap-4">
          {item.birth_date && (
            <div className="flex flex-col gap-2">
              <Typography
                variant="body-m"
                className="text-text-secondary"
                tag="span"
              >
                Дата рождения
              </Typography>
              <Typography variant="body-m-strong" tag="p">
                {item.birth_date}
              </Typography>
            </div>
          )}

          {item.birth_place && (
            <div className="flex flex-col gap-2">
              <Typography
                variant="body-m"
                className="text-text-secondary"
                tag="span"
              >
                Место рождения
              </Typography>
              <Typography variant="body-m-strong" tag="p">
                {item.birth_place}
              </Typography>
            </div>
          )}
        </div>

        {item.description && (
          <Typography variant="body-serif" tag="p">
            {item.description}
          </Typography>
        )}
      </div>
    </article>
  );
};

export { GalleryCard };
