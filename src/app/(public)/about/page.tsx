import { gql } from "@/shared/graphql/client";
import { AboutPage } from "@/views/about-page";

export const metadata = {
  title: "О палате",
};

export const revalidate = 60;

const About = async () => {
  const about = await gql.GetAboutPage();

  return <AboutPage about={about.about} />;
};

export default About;
