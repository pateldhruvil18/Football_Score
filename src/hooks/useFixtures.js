import { useQuery } from "@tanstack/react-query";
import { fetchFixturesByDate } from "../api/fixtures";

export const useFixtures = (date) => {
  return useQuery({
    queryKey: ["fixtures", date],
    queryFn: () => fetchFixturesByDate(date),
    keepPreviousData: true, 
  });
};
