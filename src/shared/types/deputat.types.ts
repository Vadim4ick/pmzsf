import { Committee } from "./committee.type";

export type Member = {
  id: number;
  slug: string;
  name: string;
  role: string;
  photo: string;
  since: string;
  committees?: Committee[];
};

export interface DeputatCard {
  section: string;
  members: Member[];
}

export type HierarchyCommitteeChairman = {
  first_name: string;
  last_name: string;
};

export type HierarchyCommittee = {
  id: string;
  title: string;
  members?:
    | {
        id: string;
        user?: HierarchyCommitteeChairman | null;
      }[]
    | null;
};

export type HierarchyMembership = {
  id: string;
  role: string;
  committee?: HierarchyCommittee | null;
};

export type HierarchyCardUser = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string | null;
  avatar?: {
    id: string;
  } | null;
  hierarchy_memberships?: HierarchyMembership[] | null;
};

export type HierarchyGroup = {
  roleKey: string;
  role: string;
  users: HierarchyCardUser[];
};
