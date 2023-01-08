import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "@/application/hooks";
import { api } from "@/infra/api";
import type { Tag } from "@/types";

export const usePopularTag = () => {
  const { data, ...rest } = useQuery<{ tags: Tag[] }>({
    queryKey: ["popularTag"],
    queryFn: () => api.tags.getPopularTag(),
  });

  return { tags: data?.tags, ...rest };
};

export const useGetTagSearch = (value: string) => {
  const debouncedValue = useDebounce(value);

  const { data, ...rest } = useQuery<{ tags: Tag[] }>({
    queryKey: ["search", debouncedValue],
    queryFn: () => api.tags.getTagSearch(debouncedValue),
    keepPreviousData: true,
    enabled: !!debouncedValue,
  });
  return { searchResults: data?.tags, ...rest };
};
