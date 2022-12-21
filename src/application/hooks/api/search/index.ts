import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getRecentSearch } from "@/infra/api/search";
import type { ISearchResult } from "@/types";

export const useSearchResult = (value: string) => {
  const [searchResults, setSearchResults] = useState<ISearchResult[]>();

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
