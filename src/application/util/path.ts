export const PATH = {
  /**
   * 키워드 검색 결과 페이지
   * @param keyword - 키워드
   * @return /explore/keywords?q={encoded keyword}
   */
  getExploreByKeywordPath: (keyword: string) => {
    const encodedValue = encodeURIComponent(keyword);
    return `/explore/keywords?q=${encodedValue}`;
  },
  /**
   * 태그 검색 결과 페이지
   * @param tag - 태그
   * @return /explore/tags/${tag id}
   */
  getExploreByTagPath: (tagId: number) => {
    return `/explore/tags/${tagId}`;
  },

  getMainPage: "/",

  /**
   * 밈 상세 페이지
   * @param id - 밈 id
   * @returns /memes/${meme id}
   */
  getMemeDetailPage: (id: number) => {
    return `/memes/${id}`;
  },
};
