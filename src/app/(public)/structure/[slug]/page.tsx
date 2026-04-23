import { members } from "@/shared/const/mock/chamberPeople.mock";
import { BiographyPage } from "@/views/biography-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const member = members.find((item) => item.id === Number(slug));

  if (!member) {
    return {
      title: "Депутат не найден",
    };
  }

  return {
    title: member.fullFio,
  };
}

export const revalidate = 0;

const Biography = async (props: { params: { slug: string } }) => {
  const { slug } = await props.params;

  const member = members.find((item) => item.id === Number(slug));

  if (!member) {
    return notFound();
  }

  return <BiographyPage member={member} />;
};

export default Biography;
