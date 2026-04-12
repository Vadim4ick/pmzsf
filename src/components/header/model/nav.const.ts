import {
  getRouteAbout,
  getRouteContacts,
  getRouteDocuments,
  getRouteExpertAdvice,
  getRouteGallery,
  getRouteMedia,
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
    href: getRouteGallery(),
  },
  {
    title: "Документы",
    href: getRouteDocuments(),
  },
  {
    title: "Контакты",
    href: getRouteContacts(),
  },
  {
    title: "Фото и видео",
    href: getRouteMedia(),
  },
  {
    title: "Экспертный совет",
    href: getRouteExpertAdvice(),
  },
];
