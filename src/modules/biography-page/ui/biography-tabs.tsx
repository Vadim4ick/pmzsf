import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

import { ActivitySection } from "./tab-item/activity-section";
import { ACTIVITY_DATA, EVENTS_DATA, PREDECESSORS_DATA } from "../model/const";

const BiographyTabs = () => {
  return (
    <Tabs defaultValue="activity" className="gap-10">
      <TabsList className="max-mobile:flex-col max-mobile:w-full h-auto! gap-2 bg-transparent p-0">
        <TabsTrigger
          value="activity"
          className="data-[state=active]:bg-background-accent bg-background-tertiary max-mobile:w-full flex cursor-pointer rounded-full px-5 py-2 text-[16px] leading-[24px] font-bold transition-colors data-[state=active]:text-white"
        >
          Деятельность
        </TabsTrigger>
        <TabsTrigger
          value="events"
          className="data-[state=active]:bg-background-accent bg-background-tertiary max-mobile:w-full flex cursor-pointer rounded-full px-5 py-2 text-[16px] leading-[24px] font-bold transition-colors data-[state=active]:text-white"
        >
          События
        </TabsTrigger>
        <TabsTrigger
          value="predecessors"
          className="data-[state=active]:bg-background-accent bg-background-tertiary max-mobile:w-full flex cursor-pointer rounded-full px-5 py-2 text-[16px] leading-[24px] font-bold transition-colors data-[state=active]:text-white"
        >
          Предшественники
        </TabsTrigger>
      </TabsList>

      <TabsContent value="activity">
        <ActivitySection groups={ACTIVITY_DATA} />
      </TabsContent>

      <TabsContent value="events">
        <ActivitySection
          groups={[{ heading: "События", items: EVENTS_DATA }]}
        />
      </TabsContent>

      <TabsContent value="predecessors">
        <ActivitySection
          groups={[{ heading: "Предшественники", items: PREDECESSORS_DATA }]}
        />
      </TabsContent>
    </Tabs>
  );
};

export { BiographyTabs };
