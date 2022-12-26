import { useQuery } from "@tanstack/react-query";
import { useDeferredValue } from "react";

import { getPopularTag, getRecentSearch } from "@/infra/api/search";
import type { SearchResult } from "@/types";

import { useDebounce } from "../../common";

export const useSearchResult = (value: string) => {
  const debouncedQuery = useDebounce(value);
  const deferredQuery = useDeferredValue(debouncedQuery);

  const { data, ...rest } = useQuery<{ tags: SearchResult[] }>({
    queryKey: ["search", deferredQuery],
    queryFn: async () => await getRecentSearch(deferredQuery),
  });
  return { searchResults: data?.tags };
};

export const usePopularTag = () => {
  const { data } = useQuery({
    queryKey: ["popularTag"],
    suspense: false, //FIX : suspense 가 적용되지 않아 false 로 임의로 둔 상태
    queryFn: () => getPopularTag(),
  });

  return { tags: data?.tags };
};
