import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getRecentSearch } from "@/infra/api/search";
import type { SearchResult } from "@/types";

export const useSearchResult = (value: string) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>();

  const { data, ...rest } = useQuery({
    queryKey: ["search", value],
    queryFn: () => getRecentSearch(value),
    suspense: false,
    onSuccess: (data) => {
      data.tags.length && setSearchResults(data.tags);
    },
  });

  return { searchResults };
};
