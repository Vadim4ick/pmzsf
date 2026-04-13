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
