export type MediaTab = "photo" | "video";

export const MEDIA_TABS: { id: MediaTab; label: string }[] = [
  { id: "photo", label: "Фото" },
  { id: "video", label: "Видео" },
];

export const PHOTO_ITEMS = [
  {
    id: 1,
    src: "/img/news/1.png",
    title:
      "Оказывается, коронованный герцог графства ни к чему нас не обязывает",
    date: "18.05.2026",
  },
  {
    id: 2,
    src: "/img/news/1.png",
    title: "Крепость духовных «скреп»",
    date: "18.05.2026",
  },
  {
    id: 3,
    src: "/img/news/1.png",
    title: "Давайте разбираться: объем доходов населения сократился",
    date: "18.05.2026",
  },
  {
    id: 4,
    src: "/img/news/1.png",
    title: "Базовый вектор развития оправдал надежды граждан",
    date: "18.05.2026",
  },
  {
    id: 5,
    src: "/img/news/1.png",
    title: "Крепость духовных «скреп»",
    date: "18.05.2026",
  },
];

export const VIDEO_ITEMS = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/img/news/1.png",
    title:
      "Давайте не будем укрепляться в мысли, что средства индивидуальной защиты оказались бесполезны",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/img/news/1.png",
    title: "Высококачественный прототип будущего проекта попахивает безумием",
  },
  {
    id: 3,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/img/news/1.png",
    title: "Убеждённость некоторых оппонентов оказалась ошибочной",
  },
  {
    id: 4,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/img/news/1.png",
    title: "Новая парадигма реальности: спикеры палаты госдумы негодуют!",
  },
];
