import { Committee } from "./committee.type";

export type Member = {
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
