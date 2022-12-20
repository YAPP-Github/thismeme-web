import useInput from "@/application/hooks/common/useInput";
import { useRecentSearch } from "@/application/hooks/common/useRecentSearch";
import Navigation from "@/components/common/Navigation";
import { SearchPopular } from "@/components/search/SearchBottom/SearchPopular";
import { SearchRecent } from "@/components/search/SearchBottom/SearchRecent";
import { SearchResult } from "@/components/search/SearchBottom/SearchResult";
import SearchInput from "@/components/search/SearchInput";

function SearchPage() {
  const inputProps = useInput();
  const { keywords, handleAddKeyword, handleDeleteKeywords } = useRecentSearch();

  return (
    <>
      <Navigation page="search" />
      <SearchInput
        {...inputProps}
        text={inputProps.value}
        placeholder="당신이 찾는 밈, 여기 있다."
        spellCheck={false}
        type="text"
        onReset={inputProps.onReset}
        onSearch={handleAddKeyword}
      />
      {!inputProps.value ? (
        keywords.length ? (
          <div className="px-14">
            <SearchRecent keywords={keywords} handleDeleteKeywords={handleDeleteKeywords} />
            <SearchPopular />
          </div>
        ) : (
          <SearchPopular />
        )
      ) : (
        <SearchResult value={inputProps.value} handleAddKeyWord={handleAddKeyword} />
      )}
    </>
  );
}

export default SearchPage;
