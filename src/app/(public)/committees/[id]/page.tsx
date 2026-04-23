import { CommitteesItemPage } from "@/views/committees-item-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { committees as committeesMock } from "@/shared/const/mock/chamberPeople.mock";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  // const committee = await getCommitteeById(id);
  const committee = committeesMock.find((item) => item.id === Number(id));

  if (!committee) {
    return {
      title: "Комитет не найден",
    };
  }

  return {
    title: committee.title,
  };
}

export const revalidate = 0;

const CommitteesItem = async (props: { params: { id: string } }) => {
  const { id } = await props.params;

  // const committee = await getCommitteeById(id);

  const committee = committeesMock.find(
    (item) => Number(item.id) === Number(id),
  );

  if (!committee?.id) {
    return notFound();
  }

  return <CommitteesItemPage committee={committee} />;
};

export default CommitteesItem;
