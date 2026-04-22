import { MOCK_MEMBERS } from "@/shared/const/mockMembers.const";
import { BiographyPage } from "@/views/biography-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const member = MOCK_MEMBERS.find((item) => item.slug === slug);

  if (!member) {
    return {
      title: "Депутат не найден",
    };
  }

  return {
    title: member.name,
  };
}

export const revalidate = 0;

const Biography = async (props: { params: { slug: string } }) => {
  const { slug } = await props.params;

  const member = MOCK_MEMBERS.find((item) => item.slug === slug);

  if (!member) {
    return notFound();
  }

  return <BiographyPage />;
};

export default Biography;
