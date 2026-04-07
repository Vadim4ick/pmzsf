import {
  Chairman,
  GosServiceLinks,
  GridNews,
  InfoRegions,
} from "@/modules/home-page";

const HomePage = () => {
  return (
    <>
      <GridNews />
      <Chairman />
      <InfoRegions />
      <GosServiceLinks />
    </>
  );
};

export { HomePage };
