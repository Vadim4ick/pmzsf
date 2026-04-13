import { MOCK_MEMBERS } from "@/shared/const/mockMembers.const";
import { DeputatCard } from "@/shared/types/deputat.types";

export const STRUCTURE_COMMITTEE_ITEM: DeputatCard[] = [
  {
    section: "Председатель",
    members: [MOCK_MEMBERS[2]],
  },

  {
    section: "Заместители председателя",
    members: MOCK_MEMBERS.slice(0, 2),
  },
];
