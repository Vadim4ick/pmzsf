import { gql } from "@/shared/graphql/client";
import { StructurePage } from "@/views/structure-page";

export const metadata = {
  title: "Структура",
};

export const revalidate = 0;

const Structure = async () => {
  const structure = await gql.GetStructurePage();

  return <StructurePage structure={structure.structure} />;
};

export default Structure;
