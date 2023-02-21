import Link from "next/link";
import { css } from "twin.macro";

import { useGetMemesByCollectionId } from "@/application/hooks";
import { Icon } from "@/components/common/Icon";

import { SharedMemeItem } from "./SharedMemeItem";

interface Props {
  name?: string;
  sharedId?: number;
}
export const UserSharedMemeList = ({ name, sharedId }: Props) => {
  const { data: memeList } = useGetMemesByCollectionId(sharedId as number);
  return (
    <div>
      <Link href="/share">
        <div className="bg-red- my-16 flex justify-between font-suit text-22-bold-140">
          {`@${name} 이 공유했던 밈`}
          <Icon
            height={32}
            name="chevronDown"
            width={32}
            css={css`
              transform: rotate(-90deg);
            `}
          />
        </div>
      </Link>
      <ul className="mb-24 flex w-[calc(100%+2rem)] snap-x snap-mandatory overflow-x-scroll">
        {memeList.map((meme) => (
          <SharedMemeItem key={meme.memeId} meme={meme} />
        ))}
      </ul>
    </div>
  );
};
