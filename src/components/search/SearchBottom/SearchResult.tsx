import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

import SearchItem from "../SearchItem";

interface Prop {
  value: string;
  handleAddKeyWord: (text: string) => void;
}

//TODO : 인터페이스 파일로 분리 필요
interface ISearchResult {
  tagId: number;
  name: string;
  categoryName: string;
  viewCount: number;
}

function SearchResult({ value, handleAddKeyWord, ...rest }: Prop) {
  const link2 = `https://1fab-1-237-151-2.jp.ngrok.io/tags/search?word=${value}`;

  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  //TODO : api 파일로 분리 필요
  const getRecentSearch = () => {
    return axios.get(`${link2}`).then((response) => response.data);
  };

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["search", value],
    queryFn: () => getRecentSearch(),
    suspense: false,
    onSuccess: (data) => {
      data.tags.length && setSearchResults(data.tags);
    },
  });

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
