import { useInput, useRecentSearch } from "@/application/hooks";
import { Navigation } from "@/components/common/Navigation";
import { SearchInput } from "@/components/search";
import { SearchPopular, SearchRecent, SearchResultList } from "@/components/search/SearchBottom";

const SearchPage = () => {
  const inputProps = useInput();
  const { keywords, onClickAddKeyword, onClickDeleteKeyword } = useRecentSearch();

  return (
    <>
      <Navigation page="search" />
      <SearchInput
        {...inputProps}
        placeholder="당신이 찾는 밈, 여기 있다."
        spellCheck={false}
        text={inputProps.value}
        type="text"
        onReset={inputProps.onReset}
        onSearch={onClickAddKeyword}
      />
      {inputProps.value && (
        <SearchResultList handleAddKeyWord={onClickAddKeyword} value={inputProps.value} />
      )}
      {!inputProps.value && keywords.length && (
        <div className="px-14">
          <SearchRecent handleDeleteKeywords={onClickDeleteKeyword} keywords={keywords} />
          <SearchPopular />
        </div>
      )}
    </>
  );
};

export default SearchPage;
