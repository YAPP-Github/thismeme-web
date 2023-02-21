import Link from "next/link";
import { memo } from "react";

import { isEncodingError } from "@/application/util";
import { Icon } from "@/components/common/Icon";
import { Photo } from "@/components/common/Photo";
import type { Meme } from "@/types";

interface Props {
  meme: Meme;
}

export const MemeItem = memo(({ meme: { name, image, memeId, shareCount } }: Props) => {
  return (
    <Link className="flex flex-col gap-6" href={`/memes/${memeId}`}>
      <Photo
        alt={name}
        className="rounded-15"
        data-id={memeId}
        height={image.images[0]?.imageHeight}
        sizes="100px"
        src={image.images[0]?.imageUrl}
        unoptimized={isEncodingError(image.images[0]?.imageUrl)}
        width={image.images[0]?.imageWidth}
      />
      <div className="flex items-center justify-between font-suit text-14-semibold-140">
        <span>{name}</span>
        <span className="flex items-center gap-4">
          <Icon height={16} name="memeShare" width={16} />
          <span className="text-gray-600">{shareCount}</span>
        </span>
      </div>
    </Link>
  );
});

MemeItem.displayName = "MemeItem";
