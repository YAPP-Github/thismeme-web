import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { getRecentSearch } from "@/infra/api/search";
import type { SearchResult } from "@/types";

export const useSearchResult = (value: string) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>();

  const queryClient = useQueryClient();
  const { data, ...rest } = useQuery({
    queryKey: ["search", value],
    queryFn: () => getRecentSearch(value),
    suspense: false,
    onSuccess: (data) => {
      data.tags.length && setSearchResults(data.tags);
      queryClient.setQueryData(["search", value], (old: any) => {
        console.log("old", old);
      });
    },
  });

  return { searchResults };
};
