import { gql } from "@/shared/graphql/client";
import { DocumentsPage } from "@/views/documents-page";

export const metadata = {
  title: "Документы",
};

export const revalidate = 60;

const Documents = async () => {
  const documents = await gql.GetDocumentsPage();

  return <DocumentsPage documents={documents.documents} />;
};

export default Documents;
