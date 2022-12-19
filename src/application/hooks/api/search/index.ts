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
      data.tags.length && setSearchResults(data.tags); //tag가 없는 경우 setSearch 가 일어나지 않음(기존의 결과 보여줌)
    },
  });

  return { searchResults };
};
