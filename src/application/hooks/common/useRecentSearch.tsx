import { useEffect, useState } from "react";

interface ISearch {
  id: number;
  text: string;
}

const useRecentSearch = () => {
  const [keywords, setKeywords] = useState<ISearch[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //HTML을 바로 렌더링하기 때문에 useEffect 를 통해 온전한 window 객체를 불러옴
      const result = localStorage.getItem("recentSearch") || "[]";
      result !== "[]" && setKeywords(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearch", JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };

    setKeywords([newKeyword, ...keywords]);
    const checkSearchItem = localStorage.getItem("recentSearch") || "[]";
    console.log(localStorage.getItem("recentSearch"));
    localStorage.setItem("recentSearch", checkSearchItem + newKeyword);
  };

  const handleClearKeywords = () => {
    setKeywords([]);
    localStorage.removeItem("recentSearch");
  };

  return { keywords, handleAddKeyword };
};

export default useRecentSearch;
