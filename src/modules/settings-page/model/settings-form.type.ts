interface ActivityEntry {
  activity: string;
  period: {
    from?: Date;
    to?: Date;
  };
}

export interface SettingsFormValues {
  // Шаг 1 — Основные данные
  avatar: File | null;
  firstName: string;
  lastName: string;
  surname: string;
  birthDate: string;
  workplace: string;

  // Шаг 2 — Деятельность в ПМЗ
  governmentAgency: string;
  subject: string;
  committee: string;
  positionPmz: string;

  // Шаг 3 — Контактные данные
  phone: string;
  email: string;
  telegram: string;
  vk: string;
  governmentWebsite: string;
  administrationWebsite: string;

  // Шаг 4 — Политическая деятельность
  powers: string;
  dateOfPowers: string;
  politicalActivities: ActivityEntry[];

  // Шаг 5 — Общественная деятельность
  socialActivities: ActivityEntry[];
}
