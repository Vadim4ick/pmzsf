import { MOCK_MEMBERS } from "@/shared/const/mockMembers.const";
import { DeputatCard } from "@/shared/types/deputat.types";

export const STRUCTURE: DeputatCard[] = [
  {
    section: "Председатель",
    members: [MOCK_MEMBERS[2]],
  },
  {
    section: "Ответственный секретарь",
    members: [MOCK_MEMBERS[1]],
  },
  {
    section: "Заместители председателя",
    members: MOCK_MEMBERS.slice(0, 2),
  },
];
