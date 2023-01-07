import { useQuery } from "@tanstack/react-query";

import { tagKeys } from "@/constants/querykey";
import { api } from "@/infra/api";
import type { Tag } from "@/types";

export const usePopularTag = () => {
  const { data, ...rest } = useQuery<{ tags: Tag[] }>({
    queryKey: tagKeys.GET_POPULAR,
    queryFn: () => api.tags.getPopularTag(),
  });

  return { tags: data?.tags, ...rest };
};
