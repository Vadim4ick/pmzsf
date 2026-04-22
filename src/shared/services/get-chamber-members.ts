import qs from "qs";

type DirectusFile = {
  id: string;
  filename_disk?: string | null;
};

export type ChamberMember = {
  id: string | number;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  member: boolean;
  avatar?: DirectusFile | null;
};

type ChamberMembersResponse = {
  data: ChamberMember[];
  meta?: {
    filter_count?: number;
  };
};

const MEMBERS_FIELDS = [
  "id",
  "first_name",
  "last_name",
  "email",
  "member",
  "avatar.id",
  "avatar.filename_disk",
];

export async function getChamberMembers({
  page = 1,
  limit = 24,
  letter,
}: {
  page?: number;
  limit?: number;
  letter?: string;
}): Promise<ChamberMembersResponse> {
  const directusUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!directusUrl) {
    throw new Error("NEXT_PUBLIC_SERVER_URL is not defined");
  }

  const filter: Record<string, unknown> = {
    member: {
      _eq: true,
    },
  };

  if (letter) {
    filter.last_name = {
      _starts_with: letter,
    };
  }

  const query = qs.stringify(
    {
      fields: MEMBERS_FIELDS,
      filter,
      sort: ["last_name", "first_name"],
      page,
      limit,
      meta: "filter_count",
    },
    { encodeValuesOnly: true },
  );

  const response = await fetch(`${directusUrl}/users?${query}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch chamber members");
  }

  return response.json();
}
