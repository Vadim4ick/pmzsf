import { cache } from "react";
import { gql } from "@/shared/graphql/client";

export const getNewsById = cache(async (id: string) => {
  return gql.GetNewsById({ id });
});
