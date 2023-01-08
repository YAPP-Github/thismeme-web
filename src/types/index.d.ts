export interface Tag {
  tagId: number;
  name: string;
  categoryName: string;
  viewCount: number;
}

export interface SearchKeyword {
  id: number;
  text: string;
}

export interface PaginationResponse<T> {
  data: T[];
  pageNumber: number;
  pageSize: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

export interface SearchItem {
  memeId: number;
  name: string;
  image: {
    images: {
      imageId: number;
      imageUrl: string;
      imageWidth: number;
      imageHeight: number;
    }[];
    count: number;
  };
  viewCount: number;
  shareCount: number;
  createdDate: string;
  modifiedDate: string;
}

export interface Meme {
  id: number;
  src: string;
  title: string;
  description: string;
  views: number;
  date: string;
  tags: string[];
  author: string;
  share: number;
}
