import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<string>("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, handleSearch, setValue };
};

export default useInput;
