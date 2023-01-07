import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "@/application/hooks";
import { tagKeys } from "@/constants/querykey";
import { api } from "@/infra/api";
import type { Tag } from "@/types";

export const useSearchResult = (value: string) => {
  const debouncedValue = useDebounce(value);

  const { data, ...rest } = useQuery<{ tags: Tag[] }>({
    queryKey: tagKeys.GET_SEARCH_BY_VALUE(debouncedValue),
    queryFn: () => api.search.getRecentSearch(debouncedValue),
    keepPreviousData: true,
    enabled: !!debouncedValue,
  });
  return { searchResults: data?.tags, ...rest };
};
