import { gql } from "@/shared/graphql/client";
import { CommitteesPage } from "@/views/committees-page";

export const metadata = {
  title: "Комитеты",
};

const Committees = async () => {
  const committees = await gql.GetAllCommittees();

  return <CommitteesPage committees={committees.committees} />;
};

export default Committees;
