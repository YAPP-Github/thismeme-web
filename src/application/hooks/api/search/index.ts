import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "@/application/hooks";
import { api } from "@/infra/api";
import type { Tag } from "@/types";

import { QUERY_KEYS } from "./queryKeys";

export const useSearchResult = (value: string) => {
  const debouncedValue = useDebounce(value);

  const { data, ...rest } = useQuery<{ tags: Tag[] }>({
    queryKey: QUERY_KEYS.GET_TAG_BY_VALUE(debouncedValue),
    queryFn: () => api.search.getRecentSearch(debouncedValue),
    keepPreviousData: true,
    enabled: !!debouncedValue,
  });
  return { searchResults: data?.tags, ...rest };
};
