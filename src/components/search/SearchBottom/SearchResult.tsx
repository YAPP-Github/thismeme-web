import SearchItem from "../SearchItem";

interface Prop {
  value: string;
  handleAddKeyWord: any;
}

function SearchResult({ value, handleAddKeyWord, ...rest }: Prop) {
  return (
    <>
      <SearchItem
        searchText={value}
        tagName="무한도전"
        majorType="예능별"
        onClick={() => {
          handleAddKeyWord("무한도전");
        }}
      />
      <SearchItem
        searchText={value}
        tagName="무한"
        majorType="예능별"
        onClick={() => {
          handleAddKeyWord("무한");
        }}
      />
      <SearchItem
        searchText={value}
        tagName="무한한도도전전"
        onClick={() => {
          handleAddKeyWord("무한한도도전전");
        }}
      />
    </>
  );
}

export default SearchResult;
