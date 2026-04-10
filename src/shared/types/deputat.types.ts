export type Committee = {
  title: string;
  person: string;
};

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
