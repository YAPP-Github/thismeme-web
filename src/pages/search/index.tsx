import useInput from "@/application/hooks/common/useInput";
import useRecentSearch from "@/application/hooks/common/useRecentSearch";
import Chip from "@/components/common/Chip";
import Navigation from "@/components/common/Navigation";
import SearchResult from "@/components/search/SearchBottom/SearchResult";
import SearchInput from "@/components/search/SearchInput";

function SearchPage() {
  const inputProps = useInput();
  const { keywords, handleAddKeyword } = useRecentSearch();

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
        <>
          <div className="flex flex-wrap align-middle">
            {keywords.map((keyword) => (
              <Chip
                key={keyword.id}
                label={keyword.text}
                type="recent"
                size="medium"
                className="m-4"
              />
            ))}
          </div>
        </>
      ) : (
        <SearchResult value={inputProps.value} handleAddKeyWord={handleAddKeyword} />
      )}
    </>
  );
}

export default SearchPage;
