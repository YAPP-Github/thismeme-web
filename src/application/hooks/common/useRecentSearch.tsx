import { useEffect, useState } from "react";

import type { ISearchKeyword } from "@/types";

export const useRecentSearch = () => {
  const [keywords, setKeywords] = useState<ISearchKeyword[]>([]);

  useEffect(() => {
    //HTML을 바로 렌더링하기 때문에 useEffect 를 통해 온전한 window 객체를 불러옴
    const result = localStorage.getItem("recentSearch") || "[]";
    result !== "[]" && setKeywords(JSON.parse(result));
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearch", JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords.filter((keyword) => keyword.text !== text)]); //중복된 검색어 필터링
  };

  const handleDeleteKeywords = () => {
    setKeywords([]);
  };

  return { keywords, handleAddKeyword, handleDeleteKeywords };
};
