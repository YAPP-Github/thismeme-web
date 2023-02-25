import type { ComponentProps } from "react";

import type { QueryClientProvider } from "@/application/queryClient";

export interface DefaultPageProps {
  hydrateState: ComponentProps<typeof QueryClientProvider>["hydrateState"];
}

export interface Meme {
  memeId: number;
  name: string;
  description: string;
  viewCount: number;
  shareCount: number;

  createdDate: string;
  modifiedDate: string;

  image: MemeImages;

  author?: string;
}

export interface MemeImages {
  images: {
    imageId: number;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
  }[];
  count: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
  createdDate: string;
  modifiedDate: string | null;
  imageUrl: string;
  shareCount: number;
  saveCount: number;
  collectionId: number;
  sharedCollectionId: number;
}

export interface GetMemesResponse {
  memes: Meme[];
  /**
   * memes의 개수
   */
  count: number;
}
