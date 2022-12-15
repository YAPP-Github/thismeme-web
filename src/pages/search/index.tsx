import useInput from "@/application/hooks/common/useInput";
import useRecentSearch from "@/application/hooks/common/useRecentSearch";
import Chip from "@/components/common/Chip";
import Navigation from "@/components/common/Navigation";
import SearchInput from "@/components/search/SearchInput";
import SearchItem from "@/components/search/SearchItem";

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
            {keywords.map((item: any) => (
              <Chip key={item.id} label={item.text} type="recent" size="medium" className="m-4" />
            ))}
          </div>
        </>
      ) : (
        <>
          <SearchItem
            searchText={inputProps.value}
            tagName="무한도전"
            majorType="예능별"
            onClick={() => {
              handleAddKeyword("무한도전");
            }}
          />
          <SearchItem
            searchText={inputProps.value}
            tagName="무한"
            majorType="예능별"
            onClick={() => {
              handleAddKeyword("무한");
            }}
          />
          <SearchItem
            searchText={inputProps.value}
            tagName="무한한도도전전"
            onClick={() => {
              handleAddKeyword("무한한도도전전");
            }}
          />
        </>
      )}
    </>
  );
}

export default SearchPage;
