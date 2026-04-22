import { ContactsPage } from "@/views/contacts-page";

export const metadata = {
  title: "Контакты",
};

export const revalidate = 60;

const Contacts = () => {
  return <ContactsPage />;
};

export default Contacts;
