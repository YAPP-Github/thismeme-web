import type { UseInfiniteQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

import { prefetchCollectionCheck, useIntersect } from "@/application/hooks";
import { CORE_QUERY_KEY } from "@/application/hooks/api/core/queryKey";
import { QUERY_KEYS } from "@/application/hooks/api/meme/queryKey";
import { Masonry } from "@/components/common/Masonry";
import { renderMemeItemSkeletons } from "@/components/common/Skeleton";
import { MemeLongPressContainer } from "@/components/meme";
import { MemeItem } from "@/components/meme/MemeItem";
import type { GetMemesResponse, Meme } from "@/types";

const skeletons = renderMemeItemSkeletons(4);

const builder = ({ elements, loading = false }: { elements: JSX.Element[]; loading?: boolean }) => {
  if (loading) return elements.concat(skeletons);
  return elements;
};

interface InfiniteMemeListProps {
  memeList: Meme[];
  loading?: boolean;
  isCollection?: boolean;
  onRequestAppend: () => void;
}

export const InfiniteMemeList = ({
  memeList,
  loading = false,
  isCollection = false,
  onRequestAppend,
}: InfiniteMemeListProps) => {
  const ref = useIntersect(onRequestAppend, { rootMargin: "200% 0px" });

  /**
   * @desc
   *  csr 환경에서 빠른 페이지 전환을 위해
   *  밈 상세 데이터를 query cache 에서 pulling 합니다
   */
  const queryClient = useQueryClient();
  const getMemeDetailFromCache = useCallback(
    (id: number) => {
      const data = queryClient.getQueriesData<UseInfiniteQueryResult<GetMemesResponse>["data"]>({
        type: "active",
        queryKey: [CORE_QUERY_KEY.infiniteMemeList],
      });

      let cachedMeme: Meme | undefined;
      data.forEach(([, queryData]) => {
        queryData?.pages.forEach((_) => {
          if (cachedMeme) return;
          cachedMeme = _.memes.find((meme) => meme.memeId === id);
        });
      });

      if (cachedMeme) {
        queryClient.setQueryData(
          QUERY_KEYS.getMemeDetailById(String(cachedMeme.memeId)),
          cachedMeme,
        );

        // NOTE: 조회수 증가를 위해 한번 더 밈 상세 api를 fetch 합니다
        queryClient.invalidateQueries(QUERY_KEYS.getMemeDetailById(String(cachedMeme.memeId)));

        // NOTE: collection check api에 waterfall 현상이 일어나기 때문에 prefetch 합니다
        prefetchCollectionCheck(cachedMeme.memeId, queryClient);
      }
    },
    [queryClient],
  );

  const elements = useMemo(
    () =>
      memeList.map((meme) => {
        return (
          <MemeLongPressContainer isCollection={isCollection} key={meme.memeId} meme={meme}>
            <MemeItem meme={meme} onClick={getMemeDetailFromCache} />
          </MemeLongPressContainer>
        );
      }),
    [memeList, getMemeDetailFromCache, isCollection],
  );

  return (
    <>
      <Masonry columns={2} spacing={9}>
        {builder({ elements, loading })}
      </Masonry>
      <div className="h-20" ref={ref} />
    </>
  );
};
