import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getRecentSearch } from "@/infra/api/search";

interface ISearchResult {
  tagId: number;
  name: string;
  categoryName: string;
  viewCount: number;
}

export const useSearchResult = (value: string) => {
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  const { data, ...rest } = useQuery({
    queryKey: ["search", value],
    queryFn: () => getRecentSearch(value),
    suspense: false,
    onSuccess: (data) => {
      setSearchResults(data.results);
      //data.tags.length && setSearchResults(data.tags);
    },
  });

  return { searchResults };
};
