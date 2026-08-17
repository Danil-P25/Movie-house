import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "@/api/search.api";
import { useDebounce } from "use-debounce";

export const useSearch = (query: string) => {
  const [debouncedQuery] = useDebounce(query, 300);

  return useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => getSearchResults(debouncedQuery),
    enabled: debouncedQuery.trim().length > 1,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};
