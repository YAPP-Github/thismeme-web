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
        <Suspense fallback={<div>loading...</div>}>
          <div className="absolute w-full bg-white">
            <SearchResultList value={inputProps.value} onClickAddKeyword={onClickAddKeyword} />
          </div>
        </Suspense>
        <div className="px-14">
          <SearchRecent keywords={keywords} onClickDeleteKeyword={onClickDeleteKeyword} />
          <div className="text-semi-bold text-[1.4rem] text-dark-gray-10">
            인기 검색어
            <PopularTag type="search" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
