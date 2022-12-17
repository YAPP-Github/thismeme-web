import useInput from "@/application/hooks/common/useInput";
import useRecentSearch from "@/application/hooks/common/useRecentSearch";
import Chip from "@/components/common/Chip";
import Navigation from "@/components/common/Navigation";
import SearchPopular from "@/components/search/SearchBottom/SearchPopular";
import SearchResult from "@/components/search/SearchBottom/SearchResult";
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
            <div className="flex justify-between">
              <span className="text-semi-bold text-[1.4rem] text-dark-gray-10">최근 검색어</span>
              <span
                className="text-semi-bold text-[1.4rem] text-gray-10"
                onClick={handleDeleteKeywords}
              >
                지우기
              </span>
            </div>
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
