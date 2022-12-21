import { useInput } from "@/application/hooks/common/useInput";
import { useRecentSearch } from "@/application/hooks/common/useRecentSearch";
import { Navigation } from "@/components/common/Navigation";
import { SearchInput } from "@/components/search";
import { SearchPopular } from "@/components/search/SearchBottom/SearchPopular";
import { SearchRecent } from "@/components/search/SearchBottom/SearchRecent";
import { SearchResult } from "@/components/search/SearchBottom/SearchResult";

const SearchPage = () => {
  const inputProps = useInput();
  const { keywords, handleAddKeyword, handleDeleteKeywords } = useRecentSearch();

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
        onSearch={handleAddKeyword}
      />
      {inputProps.value && (
        <SearchResult handleAddKeyWord={handleAddKeyword} value={inputProps.value} />
      )}
      {!inputProps.value && keywords.length && (
        <div className="px-14">
          <SearchRecent handleDeleteKeywords={handleDeleteKeywords} keywords={keywords} />
          <SearchPopular />
        </div>
      )}
    </>
  );
};

export default SearchPage;
