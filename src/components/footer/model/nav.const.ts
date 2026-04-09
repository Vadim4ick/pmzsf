import { getRouteStructure } from "@/shared/const/route.const";

export const footerNav = [
  {
    title: "О палате",

    items: [
      {
        title: "Руководство",
        href: "#",
      },
      {
        title: "Структура",
        href: getRouteStructure(),
      },
      {
        title: "Члены палаты",
        href: "#",
      },
      {
        title: "Комитеты",
        href: "#",
      },
      {
        title: "Документы",
        href: "#",
      },
    ],
  },
  {
    title: "Деятельность",

    items: [
      {
        title: "План работы",
        href: "#",
      },
      {
        title: "Решения палаты",
        href: "#",
      },
      {
        title: "Фото и видео",
        href: "#",
      },
    ],
  },
];
