import type { AxiosInstance } from "axios";

/**
 * FIX
 * API마다 Response, Request 타입 관리
 */
export class SearchApi {
  constructor(private api: AxiosInstance) {}

  /**
   * NOTE
   * 서버 응답 변환(transformation) 위치
   * 1.
   */
  getSearchResultsByKeyword = async ({
    keyword,
    offset,
    limit,
  }: {
    keyword: string;
    offset: number;
    limit: number;
  }) => {
    const { data } = await this.api.get("/search", {
      params: {
        keyword,
        offset,
        limit,
      },
    });
    const result = {
      data: data.memes,
      pageNumber: offset,
      pageSize: limit,
      isLastPage: data.memes.length < limit,
      isFirstPage: offset === 0,
    };
    return result;
  };

  getSearchResultsByTag = async ({
    keyword,
    offset,
    limit,
  }: {
    keyword: string;
    offset: number;
    limit: number;
  }) => {
    const { data } = await this.api.get("/search/tag", {
      params: {
        keyword,
        offset,
        limit,
      },
    });
    const result = {
      data: data.memes,
      pageNumber: offset,
      pageSize: limit,
      isLastPage: data.memes.length < limit,
      isFirstPage: offset === 0,
    };
    return result;
  };
}
