import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pathImage = (id: string) => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/${id}`;
};

export const dateFormatter = (date: string) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const getSettledValue = <T>(res: PromiseSettledResult<T>): T | null =>
  res.status === "fulfilled" ? res.value : null;
