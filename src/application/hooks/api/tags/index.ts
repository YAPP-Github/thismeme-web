import { useQuery } from "@tanstack/react-query";

import { api } from "@/infra/api";
import type { SearchResult } from "@/types";

export const usePopularTag = () => {
  const { data, ...rest } = useQuery<{ tags: SearchResult[] }>({
    queryKey: ["popularTag"],
    queryFn: () => api.tags.getPopularTag(),
  });

  return { tags: data?.tags, ...rest };
};
