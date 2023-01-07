import { useQuery } from "@tanstack/react-query";

import { api } from "@/infra/api";
import type { Tag } from "@/types";

import { QUERY_KEYS } from "./queryKeys";

export const usePopularTag = () => {
  const { data, ...rest } = useQuery<{ tags: Tag[] }>({
    queryKey: QUERY_KEYS.GET_POPULAR_TAG,
    queryFn: () => api.tags.getPopularTag(),
  });

  return { tags: data?.tags, ...rest };
};
