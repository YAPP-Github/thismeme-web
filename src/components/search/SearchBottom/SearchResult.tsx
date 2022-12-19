import { useSearchResult } from "@/application/hooks/api/search";

import SearchItem from "../SearchItem";

interface Prop {
  value: string;
  handleAddKeyWord: (text: string) => void;
}

function SearchResult({ value, handleAddKeyWord, ...rest }: Prop) {
  const { searchResults } = useSearchResult(value);

  //유사 태그 검색도 SEO 를 고려해야할까

  return (
    <>
      {searchResults.map((searchResult) => (
        <SearchItem
          key={searchResult.tagId}
          searchText={value}
          tagName={searchResult.name}
          majorType={searchResult.categoryName}
          onClick={() => {
            handleAddKeyWord(searchResult.name);
          }}
        />
      ))}
    </>
  );
}

export default SearchResult;
