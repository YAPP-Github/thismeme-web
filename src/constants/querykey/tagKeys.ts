//NOTE : 도메인 or 리소스 별로 쿼리키를 관리할 것 인지
export const tagKeys = {
  GET_POPULAR: ["GET_POPULAR"],
  GET_CATEGORY: ["GET_CATEGORY"],
  GET_SEARCH_BY_VALUE: (debouncedValue: string) => ["GET_SEARCH_BY_VALUE", debouncedValue],
} as const;
