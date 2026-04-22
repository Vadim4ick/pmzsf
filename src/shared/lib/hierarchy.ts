import {
  HierarchyCardUser,
  HierarchyGroup,
} from "@/shared/types/deputat.types";

const ROLE_ORDER: Record<string, number> = {
  chairman: 0,
  deputy: 1,
  member: 2,
  secretary: 3,
};

export const ROLE_LABELS: Record<string, string> = {
  chairman: "Председатель",
  deputy: "Заместители председателя",
  member: "Член",
  secretary: "Ответственный секретарь",
};

type RawHierarchyMemberUser = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string | null;
  avatar?: {
    id: string;
  } | null;
  hierarchy_memberships?:
    | readonly {
        id: string;
        role: string;
        committee?: {
          id: string;
          title: string;
          members?:
            | readonly {
                id: string;
                user?: {
                  first_name: string;
                  last_name: string;
                } | null;
              }[]
            | null;
        } | null;
      }[]
    | null;
};

type RawHierarchyMember = {
  id: string;
  role: string;
  user: RawHierarchyMemberUser;
};

export const mapUserToHierarchyCardUser = (
  user: RawHierarchyMemberUser,
): HierarchyCardUser => ({
  id: user.id,
  first_name: user.first_name,
  last_name: user.last_name,
  email: user.email,
  avatar: user.avatar
    ? {
        id: user.avatar.id,
      }
    : null,
  hierarchy_memberships:
    user.hierarchy_memberships?.map((membership) => ({
      id: membership.id,
      role: membership.role,
      committee: membership.committee
        ? {
            id: membership.committee.id,
            title: membership.committee.title,
            members:
              membership.committee.members?.map((member) => ({
                id: member.id,
                user: member.user
                  ? {
                      first_name: member.user.first_name,
                      last_name: member.user.last_name,
                    }
                  : null,
              })) ?? [],
          }
        : null,
    })) ?? [],
});

export const groupHierarchyMembers = (
  members: readonly RawHierarchyMember[],
): HierarchyGroup[] => {
  const all = members
    .filter((member) => member.role !== "member")
    .map((member) => ({
      user: mapUserToHierarchyCardUser(member.user),
      roleKey: member.role,
      role: ROLE_LABELS[member.role],
    }));

  return Object.values(
    all.reduce<Record<string, HierarchyGroup>>((acc, item) => {
      const key = item.roleKey;

      if (!acc[key]) {
        acc[key] = {
          roleKey: key,
          role: item.role,
          users: [],
        };
      }

      const exists = acc[key].users.some((u) => u.id === item.user.id);

      if (!exists) {
        acc[key].users.push(item.user);
      }

      return acc;
    }, {}),
  ).sort(
    (a, b) => (ROLE_ORDER[a.roleKey] ?? 999) - (ROLE_ORDER[b.roleKey] ?? 999),
  );
};

export const getPlainMembers = <T extends { role: string }>(
  members: readonly T[],
): T[] => members.filter((member) => member.role === "member");
