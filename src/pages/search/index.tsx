import { Suspense } from "react";

import { useInput, useRecentSearch } from "@/application/hooks";
import { Navigation } from "@/components/common/Navigation";
import { PopularTag } from "@/components/common/Tags/PopularTag";
import { SearchInput, SearchRecent, SearchResultList } from "@/components/search";

const SearchPage = () => {
  const inputProps = useInput();
  const { keywords, onClickDeleteKeyword, onClickAddKeyword } = useRecentSearch();

  return (
    <>
      <Navigation page="search" />
      <div className="relative">
        <SearchInput
          {...inputProps}
          placeholder="당신이 찾는 밈, 여기 있다."
          spellCheck={false}
          type="text"
          onClickAddKeyword={onClickAddKeyword}
        />
        <p className="my-16 px-14 text-label text-gray-10">밈 제목,태그 설명을 입력하세요</p>
        <Suspense fallback={<div>loading...</div>}>
          <div className="absolute w-full bg-white">
            <SearchResultList value={inputProps.value} onClickAddKeyword={onClickAddKeyword} />
          </div>
        </Suspense>
        <Suspense fallback={<div className="text-title">로딩중중</div>}>
          <div className="px-14">
            <SearchRecent keywords={keywords} onClickDeleteKeyword={onClickDeleteKeyword} />
            <div className="mb-8 text-semi-bold-14 text-dark-gray-10">인기 검색어</div>
            <PopularTag type="search" />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default SearchPage;
