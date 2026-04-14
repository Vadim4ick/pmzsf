import { useQuery } from "@tanstack/react-query";
import { gql } from "../graphql/client";

export const useGetRepresentativesByRegion = (regionCode: string) => {
  return useQuery({
    queryKey: ["getRepresentativesByRegion", regionCode],
    queryFn: async () => {
      try {
        return await gql.GetRepresentativesByRegion({ regionCode });
      } catch (err) {
        console.error("GetRepresentativesByRegion", err);
        throw err;
      }
    },
    enabled: !!regionCode,
  });
};
