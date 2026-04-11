import { COMMITTEES } from "@/modules/committees-page";
import { CommitteesItemPage } from "@/views/committees-item-page";
import { notFound } from "next/navigation";

const CommitteesItem = async (props: { params: { id: string } }) => {
  const { id } = await props.params;

  const committee = COMMITTEES.find((item) => item.id === Number(id));

  if (!committee) {
    return notFound();
  }

  return <CommitteesItemPage committee={committee} />;
};

export default CommitteesItem;
