import { useQuery } from "@tanstack/react-query";
import { getRepresentativesByRegion } from "./get-chamber-members";

export const useGetRepresentativesByRegion = (regionCode: string) => {
  return useQuery({
    queryKey: ["getRepresentativesByRegion", regionCode],
    queryFn: () => getRepresentativesByRegion(regionCode),
    enabled: !!regionCode,
  });
};
