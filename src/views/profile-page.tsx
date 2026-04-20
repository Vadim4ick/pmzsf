"use client";

import { ArrowRight } from "@/shared/icons/arrow-right";
import { Exit } from "@/shared/icons/exit";
import { Pencil } from "@/shared/icons/pencil";
import { Tg } from "@/shared/icons/seti/tg";
import { Vk } from "@/shared/icons/seti/vk";
import { Global } from "@/shared/icons/seti/global";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { Mail } from "@/shared/icons/seti/mail";
import { Phone } from "@/shared/icons/seti/phone";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui/sheet";
import { Input } from "@/shared/ui/input";

// ── Типы ──────────────────────────────────────────────
interface ProfileData {
  avatarUrl: string;
  fullName: string;
  role: string;
  badge: string;
  authoritySince: string;
  stats: { label: string; value: number; buttonLabel: string }[];
  personalInfo: { label: string }[];
  contacts: {
    icon: React.ReactNode;
    label: string;
    fieldName: string;
  }[];
}

// ── Моковые данные ────────────────────────────────────
const PROFILE: ProfileData = {
  avatarUrl: "/img/chairman.png",
  fullName: "Соболев Михаил Владимирович",
  role: "Депутат Законодательного Собрания Новосибирской области",
  badge: "Председатель Палаты",
  authoritySince: "В полномочиях с 07.11.2026",
  stats: [
    { label: "Баллов за последний отчёт", value: 500, buttonLabel: "Отчёты" },
    { label: "Опубликовано новостей", value: 45, buttonLabel: "Новости" },
    {
      label: "Законодательных инициатив",
      value: 12,
      buttonLabel: "Инициативы",
    },
  ],
  personalInfo: [
    { label: "Дата рождения 12 июня 1989 г" },
    { label: "Деятельность в ПМЗ" },
    { label: "Полномочия депутата" },
    { label: "Место работы" },
    { label: "Политическая деятельность" },
    { label: "Общественная деятельность" },
  ],
  contacts: [
    { icon: <Phone />, label: "+7 (104) 259-18-11", fieldName: "Телефон" },
    { icon: <Mail />, label: "bsikdar@yahoo.com", fieldName: "Email" },
    {
      icon: <Tg />,
      label: "wmszeliga@comcast.net",
      fieldName: "Телеграм",
    },
    {
      icon: <Vk />,
      label: "wmszeliga@comcast.net",
      fieldName: "ВКонтакте",
    },
    {
      icon: <Global />,
      label: "Сайт правительства региона",
      fieldName: "Сайт правительства",
    },
    {
      icon: <Global />,
      label: "Сайт администрации региона",
      fieldName: "Сайт администрации",
    },
  ],
};

const ProfilePage = () => {
  const profile = PROFILE;

  const [sheetOpen, setSheetOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<{
    fieldName: string;
    value: string;
  } | null>(null);

  const handleContactClick = (contact: {
    fieldName: string;
    label: string;
  }) => {
    setEditingContact({ fieldName: contact.fieldName, value: contact.label });
    setSheetOpen(true);
  };

  const handleSave = () => {
    // TODO: сохранение данных
    setSheetOpen(false);
    setEditingContact(null);
  };

  return (
    <section>
      <Container className="max-tablet:gap-4 flex flex-col gap-6">
        <Typography variant="header-l" tag="h1">
          Ваш профиль
        </Typography>

        <div className="flex flex-col gap-4">
          {/* ── Верхний блок: карточка + статистика ── */}
          <div className="max-desktop:grid-cols-[1fr_auto] max-tablet:grid-cols-1 grid grid-cols-[1fr_535px] gap-4">
            {/* Карточка профиля */}
            <div className="bg-background-primary max-mobile:flex-col max-mobile:items-start max-mobile:gap-4 max-mobile:p-4 flex flex-1 items-center gap-6 rounded-[12px] p-6">
              {/* Аватар */}
              <div className="max-mobile:size-[100px] relative size-[136px] shrink-0 overflow-hidden rounded-[6px]">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.fullName}
                  fill
                  className="object-cover"
                />

                <button
                  className="bg-background-primary absolute right-2 bottom-2 flex size-8 cursor-pointer items-center justify-center rounded-full"
                  aria-label="Редактировать фото"
                >
                  <Pencil className="h-4 w-4" />
                </button>
              </div>

              {/* Информация */}
              <div className="flex w-full flex-col gap-1">
                <Typography tag="h3" variant="header-m">
                  {profile.fullName}
                </Typography>

                <Typography tag="p" variant="body-m">
                  {profile.role}
                </Typography>

                <Typography
                  className="bg-background-accent-subdued-active mt-2 w-fit rounded-[6px] px-2 py-1.5"
                  tag="p"
                  variant="body-s"
                >
                  {profile.badge}
                </Typography>

                <Typography
                  className="text-text-subtle mt-0.5 ml-auto px-2 py-1.5"
                  tag="p"
                  variant="body-s"
                >
                  {profile.authoritySince}
                </Typography>
              </div>
            </div>

            {/* Статистика */}
            <div className="bg-background-primary max-mobile:p-4 flex flex-col gap-4 rounded-[12px] p-6">
              {profile.stats.map((stat) => (
                <div
                  key={stat.buttonLabel}
                  className="max-mobile:flex-col max-mobile:items-stretch max-mobile:gap-2 flex items-center justify-between gap-6"
                >
                  <div className="flex w-full items-center justify-between gap-2">
                    <Typography tag="span" variant="body-m-strong">
                      {stat.label}
                    </Typography>
                    <Typography tag="span" variant="header-s">
                      {stat.value}
                    </Typography>
                  </div>

                  <Button
                    className="max-mobile:w-full w-[185px]"
                    variant={"default"}
                  >
                    {stat.buttonLabel}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* ── Нижний блок: информация + контакты ── */}
          <div className="max-tablet:grid-cols-1 grid grid-cols-2 gap-4">
            {/* Личная информация */}
            <div className="bg-background-primary flex flex-col rounded-[12px] p-4">
              {profile.personalInfo.map((item, index) => (
                <button
                  key={index}
                  className={cn(
                    "border-border-secondary hover:bg-background-secondary flex cursor-pointer items-center justify-between gap-4 border-b px-4 py-6 transition-colors hover:rounded-[6px]",
                    {
                      "border-b-0": index === profile.personalInfo.length - 1,
                    },
                  )}
                >
                  <Typography variant="body-m" tag="span">
                    {item.label}
                  </Typography>

                  <div className="flex size-6 items-center justify-center">
                    <ArrowRight className="size-3 shrink-0" />
                  </div>
                </button>
              ))}
            </div>

            {/* Контакты */}
            <div className="bg-background-primary flex flex-col rounded-[12px] p-4">
              {profile.contacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleContactClick(contact)}
                  className={cn(
                    "border-border-secondary hover:bg-background-secondary flex cursor-pointer items-center justify-between gap-4 border-b px-4 py-4 transition-colors hover:rounded-[6px]",
                    {
                      "border-b-0": index === profile.contacts.length - 1,
                    },
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-background-tertiary text-icon-secondary flex size-10 items-center justify-center rounded-full">
                      {contact.icon}
                    </span>

                    <Typography variant="body-m" tag="span">
                      {contact.label}
                    </Typography>
                  </div>

                  <div className="flex size-6 items-center justify-center">
                    <ArrowRight className="size-3 shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Кнопка выхода ── */}
        <div className="flex justify-end">
          <Button>
            <Exit />
            Выйти из профиля
          </Button>
        </div>
      </Container>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="bg-background-main max-mobile:w-[calc(100%-32px)]! mr-4 flex h-auto max-h-[calc(100vh-32px)] flex-col gap-0 self-center rounded-lg">
          <SheetHeader className="border-border-secondary border-b px-6 py-8">
            <SheetTitle asChild>
              <Typography variant="header-s" tag="p">
                {editingContact?.fieldName}
              </Typography>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-1 flex-col gap-6 p-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="contact-field">
                <Typography variant="body-l">
                  <span className="text-text-error">*</span>{" "}
                  {editingContact?.fieldName}
                </Typography>
              </label>

              <Input
                id="contact-field"
                className="bg-background-primary h-[56px]"
                value={editingContact?.value ?? ""}
                onChange={(e) =>
                  setEditingContact((prev) =>
                    prev ? { ...prev, value: e.target.value } : null,
                  )
                }
              />
            </div>
          </div>

          <div className="border-border-secondary w-full border-t p-8">
            <Button
              className="w-full"
              variant={"secondary"}
              onClick={handleSave}
            >
              Сохранить
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export { ProfilePage };
