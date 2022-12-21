import { useSearchResult } from "@/application/hooks/api/search";

import { SearchItem } from "../SearchItem";

interface Prop {
  value: string;
  handleAddKeyWord: (text: string) => void;
}

export const SearchResultList = ({ value, handleAddKeyWord, ...rest }: Prop) => {
  const { searchResults } = useSearchResult(value);

  console.log(searchResults);
  //유사 태그 검색도 SEO 를 고려해야할까

  return (
    <>
      {searchResults?.map((searchResult) => (
        <SearchItem
          key={searchResult.tagId}
          majorType={searchResult.categoryName}
          searchText={value}
          tagName={searchResult.name}
          onClick={() => {
            handleAddKeyWord(searchResult.name);
          }}
        />
      ))}
    </>
  );
};
