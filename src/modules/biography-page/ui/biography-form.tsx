import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";

const BiographyForm = () => {
  return (
    <div className="bg-background-primary max-desktop1250:px-8 max-mobile:p-8 rounded-[16px] p-16">
      <div className="max-desktop:gap-5 max-desktop1250:grid-cols-[350px_1fr] max-mobile:gap-8 max-tablet:grid-cols-1 grid grid-cols-[500px_1fr] gap-10">
        <div className="desktop1250:min-h-[450px] desktop1250:max-h-[550px] max-desktop1250:h-[400px] max-tablet:h-[500px] max-mobile:h-[400px] relative h-full overflow-hidden rounded-[12px]">
          <Image
            src={"/img/chairman.png"}
            fill
            alt={"chairman"}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <Typography variant="subtitle-serif-l" tag="h3">
            Представитель от исполнительного органа государственной власти
            Ростовской области
          </Typography>

          <Typography variant="header-l" tag="h2">
            Яцкин Андрей Владимирович
          </Typography>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Typography
                className="text-text-secondary"
                variant="body-m"
                tag="span"
              >
                Дата рождения
              </Typography>

              <Typography variant="body-m-strong" tag="p">
                25 апреля 1969 года
              </Typography>
            </div>
            <div className="flex flex-col gap-1.5">
              <Typography
                className="text-text-secondary"
                variant="body-m"
                tag="span"
              >
                Комитет
              </Typography>

              <Typography variant="body-m-strong" tag="p">
                Комитет по регламенту, взаимодействию с федеральными округами и
                субъектами Российской Федерации
              </Typography>
            </div>
            <div className="flex flex-col gap-1.5">
              <Typography
                className="text-text-secondary"
                variant="body-m"
                tag="span"
              >
                Место работы
              </Typography>

              <Typography variant="body-m-strong" tag="p">
                Генеральный директор ООО «СИТИСТРИТПРОЕКТ» с 2020г. по н.в
              </Typography>
            </div>
            <div className="flex flex-col gap-1.5">
              <Typography
                className="text-text-secondary"
                variant="body-m"
                tag="span"
              >
                Субъект РФ
              </Typography>

              <Typography variant="body-m-strong" tag="p">
                Республика Татарстан
              </Typography>
            </div>
            <div className="flex flex-col gap-1.5">
              <Typography
                className="text-text-secondary"
                variant="body-m"
                tag="span"
              >
                Какой орган государственной власти направил в ПМЗ
              </Typography>

              <Typography variant="body-m-strong" tag="p">
                Государственный Совет Республики Татарстан
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={"#"}
              className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
            >
              <Tg />
            </a>
            <a
              href={"#"}
              className="border-border-neutral hover:border-text-accent flex size-8 items-center justify-center rounded-full border-2 transition-colors"
            >
              <Vk />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BiographyForm };
