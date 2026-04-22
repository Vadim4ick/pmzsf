import qs from "qs";
import { RegionFragmentFragment } from "../graphql/__generated__";

type DirectusFile = {
  id: string;
  filename_disk?: string | null;
};

export type ChamberMember = {
  id: string | number;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  title: string | null;
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
  "title",
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

export type Representative = {
  id: string | number;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  title: string | null;
  member: boolean;
  avatar?: DirectusFile | null;
  region?: RegionFragmentFragment | null;
};

type RepresentativesResponse = {
  data: Representative[];
  meta?: {
    filter_count?: number;
  };
};

const REPRESENTATIVES_FIELDS = [
  "id",
  "first_name",
  "last_name",
  "email",
  "member",
  "title",
  "avatar.id",
  "avatar.filename_disk",
  "region.id",
  "region.code",
  "region.title",
];

export async function getRepresentativesByRegion(
  regionCode: string,
): Promise<RepresentativesResponse> {
  const directusUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!directusUrl) {
    throw new Error("NEXT_PUBLIC_SERVER_URL is not defined");
  }

  const query = qs.stringify(
    {
      fields: REPRESENTATIVES_FIELDS,
      filter: {
        member: {
          _eq: true,
        },
        region: {
          code: {
            _eq: regionCode,
          },
        },
      },
      sort: ["last_name", "first_name"],
      meta: "filter_count",
    },
    { encodeValuesOnly: true },
  );

  const response = await fetch(`${directusUrl}/users?${query}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch representatives by region");
  }

  return response.json();
}
