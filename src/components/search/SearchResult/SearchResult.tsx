import { useGetTagSearch } from "@/application/hooks";
import { SearchItem } from "@/components/search";

interface Prop {
  value: string;
  onClickAddKeyword: (text: string) => void;
}

export const SearchResultList = ({ value, onClickAddKeyword }: Prop) => {
  const { searchResults } = useGetTagSearch(value.trim());

  if (!value || searchResults?.length === 0) {
    return null;
  }
  return (
    <ul>
      {searchResults?.map((searchResult) => (
        <li key={searchResult.tagId}>
          <SearchItem
            majorType={searchResult.categoryName}
            searchText={value}
            tagName={searchResult.name}
            onClick={() => {
              onClickAddKeyword(searchResult.name);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
