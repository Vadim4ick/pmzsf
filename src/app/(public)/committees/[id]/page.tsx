import { getCommitteeById } from "@/shared/actions/committees";
import { CommitteesItemPage } from "@/views/committees-item-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  const committee = await getCommitteeById(id);

  if (!committee?.committees_by_id) {
    return {
      title: "Комитет не найден",
    };
  }

  return {
    title: committee.committees_by_id.title,
  };
}

export const revalidate = 0;

const CommitteesItem = async (props: { params: { id: string } }) => {
  const { id } = await props.params;

  const committee = await getCommitteeById(id);

  if (!committee?.committees_by_id) {
    return notFound();
  }

  return <CommitteesItemPage committee={committee.committees_by_id} />;
};

export default CommitteesItem;
