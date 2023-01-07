import { useQuery } from "@tanstack/react-query";

import { api } from "@/infra/api";

import { QUERY_KEYS } from "./queryKeys";

export const useMemeDetailById = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: QUERY_KEYS.GET_MEME_BY_ID(id),
    queryFn: () => api.meme.getMemeDetailById(id),
    enabled: !!id,
  });

  return { ...data, ...rest };
};
