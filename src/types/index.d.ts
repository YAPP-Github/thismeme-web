export interface SearchResult {
  //네이밍 Tag 로 변경 어떨까요 흠
  tagId: number;
  name: string;
  categoryName: string;
  viewCount: number;
}

export interface SearchKeyword {
  id: number;
  text: string;
}

export interface Meme {
  id: number;
  src: string;
  title: string;
  description: string;
  views: number;
  date: string;
}
