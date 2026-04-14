import { useQuery } from "@tanstack/react-query";
import { gql } from "../graphql/client";

export const useGetNewsByRegion = (regionCode: string) => {
  return useQuery({
    queryKey: ["getNewsByRegion", regionCode],
    queryFn: async () => {
      try {
        return await gql.GetNewsByRegion({ regionCode });
      } catch (err) {
        console.error("GetNewsByRegion", err);
        throw err;
      }
    },
    enabled: !!regionCode,
  });
};
