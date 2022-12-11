import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleInputReset = () => {
    setValue("");
  };

  return { value, handleInputChange, setValue, handleInputReset };
};

export default useInput;
