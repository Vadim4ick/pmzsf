import { ExpertAdvicePage } from "@/views/expert-advice-page";

export const metadata = {
  title: "Экспертный совет",
};

export const revalidate = 60;

const ExpertAdvice = async () => {
  // const expertAdvice = await gql.GetExpertAdvicePage();

  return <ExpertAdvicePage />;
};

export default ExpertAdvice;
