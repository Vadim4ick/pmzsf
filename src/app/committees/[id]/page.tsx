import { COMMITTEES } from "@/modules/committees-page";
import { CommitteesItemPage } from "@/views/committees-item-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  const committee = COMMITTEES.find((item) => item.id === Number(id));

  if (!committee) {
    return {
      title: "Комитет не найден",
    };
  }

  return {
    title: committee.title,
  };
}

const CommitteesItem = async (props: { params: { id: string } }) => {
  const { id } = await props.params;

  const committee = COMMITTEES.find((item) => item.id === Number(id));

  if (!committee) {
    return notFound();
  }

  return <CommitteesItemPage committee={committee} />;
};

export default CommitteesItem;
