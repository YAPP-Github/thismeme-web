//NOTE : 도메인 or 리소스 별로 쿼리키를 관리할 것 인지
export const memeKeys = {
  GET_MEME_BY_ID: (id: string) => ["GET_MEME_BY_ID", id],
} as const;
