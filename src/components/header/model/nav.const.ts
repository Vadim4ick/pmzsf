import {
  getRouteAbout,
  getRouteContacts,
  getRouteDocuments,
  getRouteExpertAdvice,
  getRouteGallery,
  getRouteMedia,
  getRouteNews,
  getRouteProfile,
  getRouteSettings,
  getRouteStructure,
} from "@/shared/const/route.const";
import { InitiativesIcon } from "@/shared/icons/menu/initiatives-icon";
import { NewsIcon } from "@/shared/icons/menu/news-icon";
import { NotificationIcon } from "@/shared/icons/menu/notification-icon";
import { ProfileIcon } from "@/shared/icons/menu/profile-icon";
import { ReportIcon } from "@/shared/icons/menu/report-icon";
import { SettingsIcon } from "@/shared/icons/menu/settings-icon";

export type NavItem = {
  title: string;
  href: string;
  icon?: React.ComponentType;
};

export const navbar: NavItem[] = [
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

export const privateNavbar: NavItem[] = [
  {
    title: "Профиль",
    href: getRouteProfile(),
    icon: ProfileIcon,
  },
  {
    title: "Настройки профиля",
    href: getRouteSettings(),
    icon: SettingsIcon,
  },
  {
    title: "Отчёты",
    href: "#",
    icon: ReportIcon,
  },
  {
    title: "Новости",
    href: "#",
    icon: NewsIcon,
  },
  {
    title: "Уведомления",
    href: "#",
    icon: NotificationIcon,
  },
  {
    title: "Законодат. инициативы",
    href: "#",
    icon: InitiativesIcon,
  },
];
