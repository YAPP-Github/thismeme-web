import { useQuery } from "@tanstack/react-query";

import { getPopularTag } from "@/infra/api/tags";
import type { SearchResult } from "@/types";

export const usePopularTag = () => {
  const { data, ...rest } = useQuery<{ tags: SearchResult[] }>({
    queryKey: ["popularTag"],
    queryFn: async () => await getPopularTag(),
  });

  return { tags: data?.tags, ...rest };
};
