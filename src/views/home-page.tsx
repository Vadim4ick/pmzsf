import {
  Chairman,
  GosServiceLinks,
  GridNews,
  InfoRegions,
} from "@/modules/home-page";
import { gql } from "@/shared/graphql/client";
import { getSettledValue } from "@/shared/lib/utils";

const HomePage = async () => {
  const [regions, homePage, newsFive] = await Promise.allSettled([
    gql.GetAllRegions(),
    gql.GetHomePage(),
    gql.GetTopFiveNews(),
  ]);

  const regionsVal = getSettledValue(regions);
  const newsFiveVal = getSettledValue(newsFive);
  const homePageVal = getSettledValue(homePage);

  const news = newsFiveVal?.news;
  // const chairman = homePageVal?.home_page.chamber_chairman;
  const chairman_video = homePageVal?.home_page.chairman_video;
  const chairman_featured_news = homePageVal?.home_page.chairman_featured_news;

  return (
    <>
      {news && <GridNews news={news} />}
      <Chairman
        // chairman={chairman}
        chairman_video={chairman_video}
        chairman_featured_news={chairman_featured_news}
      />
      <InfoRegions regions={regionsVal?.regions || []} />
      <GosServiceLinks />
    </>
  );
};

export { HomePage };
