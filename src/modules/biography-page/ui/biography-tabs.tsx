import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

import { ACTIVITY_DATA } from "../model/const";
import { ActivitySectionTab } from "./tab-item/activity-section-tab";
import { EventsTab } from "./tab-item/events-tab";
import { PredecessorsTab } from "./tab-item/predecessors-tab";

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
        <ActivitySectionTab groups={ACTIVITY_DATA} />
      </TabsContent>

      <TabsContent value="events">
        <EventsTab />
      </TabsContent>

      <TabsContent value="predecessors">
        <PredecessorsTab />
      </TabsContent>
    </Tabs>
  );
};

export { BiographyTabs };
