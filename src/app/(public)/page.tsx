import { HomePage } from "@/views/home-page";

export const metadata = {
  title: "Главная",
};

export const revalidate = 0;

export default function Home() {
  return <HomePage />;
}
