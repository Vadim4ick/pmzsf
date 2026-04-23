import { CommitteesPage } from "@/views/committees-page";

export const metadata = {
  title: "Комитеты",
};

export const revalidate = 0;

const Committees = async () => {
  // const committees = await gql.GetAllCommittees();

  return <CommitteesPage />;
};

export default Committees;
