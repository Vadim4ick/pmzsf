import {
  Chairman,
  GosServiceLinks,
  GridNews,
  InfoRegions,
} from "@/modules/home-page";
import { gql } from "@/shared/graphql/client";
import { getSettledValue } from "@/shared/lib/utils";

const HomePage = async () => {
  const [regions, homePage] = await Promise.allSettled([
    gql.GetAllRegions(),
    gql.GetHomePage(),
  ]);

  const regionsVal = getSettledValue(regions);
  const homePageVal = getSettledValue(homePage);

  const news = homePageVal?.home_page.popular_news;

  return (
    <>
      {news && <GridNews news={news} />}
      <Chairman />
      <InfoRegions regions={regionsVal?.regions || []} />
      <GosServiceLinks />
    </>
  );
};

export { HomePage };
