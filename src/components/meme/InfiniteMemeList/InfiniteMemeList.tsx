import { useIntersect } from "@/application/hooks";
import { Masonry } from "@/components/common/Masonry";
import { MemeItem } from "@/components/meme/MemeItem";
import type { Meme } from "@/types";

interface Props {
  memeList: Meme[];
  onEndReached: () => void;
  root?: IntersectionObserverInit["root"];
  rootMargin?: IntersectionObserverInit["rootMargin"];
  threshold?: IntersectionObserverInit["threshold"];
}

export const InfiniteMemeList = ({
  memeList,
  onEndReached,
  root,
  rootMargin,
  threshold,
}: Props) => {
  const ref = useIntersect(onEndReached, { root, rootMargin, threshold });

  return (
    <>
      <Masonry columns={2} spacing={9}>
        {memeList.map((meme) => (
          <MemeItem key={meme.memeId} meme={meme} />
        ))}
      </Masonry>
      <div className="h-20" ref={ref} />
    </>
  );
};
