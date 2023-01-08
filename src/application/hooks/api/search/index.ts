import type { QueryFunctionContext } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

import { api } from "@/infra/api";
import type { PaginationResponse, SearchItem } from "@/types";

const PAGE_SIZE = 20;
/**
 * FIX
 * 1. query key관리
 * 2. pageParam 타입추론
 * 3. getSearchResultsByKeyword 비동기 API에 대해 서버에서 받아온 데이터에 대한 스키마 필요(프론트에 필요한 데이터로 가공해야함)
 */
export const useGetSearchResultsByKeyword = (keyword: string) => {
  return useInfiniteQuery<PaginationResponse<SearchItem>>({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["getSearchResultsByKeyword", keyword],
    queryFn: ({ pageParam = 0 }: QueryFunctionContext) =>
      api.search.getSearchResultsByKeyword({ keyword, offset: pageParam, limit: PAGE_SIZE }),
    suspense: false,
    enabled: !!keyword,
    getNextPageParam: (lastPage) => {
      const { isLastPage, pageNumber, pageSize } = lastPage;
      return isLastPage ? undefined : pageNumber + pageSize;
    },
  });
};

/**
 * FIX
 * 1. query key관리
 * 2. pageParam 타입추론
 * 3. getSearchResultsByTag 비동기 API에 대해 서버에서 받아온 데이터에 대한 스키마 필요(프론트에 필요한 데이터로 가공해야함)
 */
export const useGetSearchResultsByTag = (tag: string) => {
  return useInfiniteQuery<PaginationResponse<SearchItem>>({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["getSearchResultsByTag", tag],
    queryFn: ({ pageParam = 0 }: QueryFunctionContext) =>
      api.search.getSearchResultsByTag({ keyword: tag, offset: pageParam, limit: PAGE_SIZE }),
    suspense: false,
    enabled: !!tag,
    getNextPageParam: (lastPage) => {
      const { isLastPage, pageNumber, pageSize } = lastPage;
      return isLastPage ? undefined : pageNumber + pageSize;
    },
  });
};
