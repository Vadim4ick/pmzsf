import { gql } from "@/shared/graphql/client";
import { ExpertAdvicePage } from "@/views/expert-advice-page";

export const metadata = {
  title: "Экспертный совет",
};

export const revalidate = 60;

const ExpertAdvice = async () => {
  const expertAdvice = await gql.GetExpertAdvicePage();

  return <ExpertAdvicePage expertAdvice={expertAdvice.expert_advice} />;
};

export default ExpertAdvice;
