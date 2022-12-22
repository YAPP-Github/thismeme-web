import { useSearchResult } from "@/application/hooks/api/search";

import { SearchItem } from "../SearchItem";

interface Prop {
  value: string;
  onClickAddKeyword: (text: string) => void;
}

export const SearchResultList = ({ value, onClickAddKeyword, ...rest }: Prop) => {
  const { searchResults } = useSearchResult(value);
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
            onClickAddKeyword(searchResult.name);
          }}
        />
      ))}
    </>
  );
};
