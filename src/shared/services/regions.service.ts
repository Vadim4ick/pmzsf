import { useQuery } from "@tanstack/react-query";
import { gql } from "../graphql/client";

export const useGetAllRegions = () => {
  return useQuery({
    queryKey: ["getAllRegions"],
    queryFn: async () => {
      try {
        return await gql.GetAllRegions();
      } catch (err) {
        console.error("GetAllRegions", err);
        throw err;
      }
    },
  });
};
