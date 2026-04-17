/* eslint-disable @typescript-eslint/no-explicit-any */
import { cache } from "react";
import { gql } from "@/shared/graphql/client";

export const getCommitteeById = cache(async (id: string) => {
  try {
    return await gql.GetCommitteeById({ id });
  } catch (e: any) {
    const code = e?.response?.errors?.[0]?.extensions?.code;

    if (code === "FORBIDDEN") {
      return null;
    }

    throw e;
  }
});
