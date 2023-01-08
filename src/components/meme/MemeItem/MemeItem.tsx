import Link from "next/link";
import { memo } from "react";

import { Icon } from "@/components/common/Icon";
import { Photo } from "@/components/common/Photo";
import type { SearchItem } from "@/types";

/**
 * FIX
 * 1. Props 인터페이스 타입 명확하게 지정
 */
interface Props {
  meme: SearchItem;
}
export const MemeItem = memo(({ meme }: Props) => {
  return (
    <Link className="flex flex-col gap-6" href={`/memes/${meme.memeId}`}>
      <Photo
        className="rounded-15"
        height={meme.image.images[0].imageHeight}
        src={meme.image.images[0].imageUrl}
        width={meme.image.images[0].imageWidth}
      />
      <div className="flex items-center justify-between">
        <span className="text-12-bold-160">{meme.name}</span>
        <span className="flex items-center text-12-regular-160">
          <Icon name="memeShare" />
          {meme.shareCount}
        </span>
      </div>
    </Link>
  );
});

MemeItem.displayName = "MemeItem";
