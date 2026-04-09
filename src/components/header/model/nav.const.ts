import {
  getRouteAbout,
  getRouteNews,
  getRouteStructure,
} from "@/shared/const/route.const";

export const navbar = [
  {
    title: "Новости",
    href: getRouteNews(),
  },
  {
    title: "Структура",
    href: getRouteStructure(),
  },
  {
    title: "О палате",
    href: getRouteAbout(),
  },
  {
    title: "Галерея Победы",
    href: "#",
  },
  {
    title: "Документы",
    href: "#",
  },
  {
    title: "Контакты",
    href: "#",
  },
  {
    title: "Фото и видео",
    href: "#",
  },
  {
    title: "Экспертный совет",
    href: "#",
  },
];
