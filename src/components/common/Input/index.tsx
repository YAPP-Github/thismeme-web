import type { ChangeEvent, Dispatch, HTMLAttributes, SetStateAction } from "react";
import { Context, useContext } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
  size: "small" | "medium";
  placeholder?: string;
  isDelete?: boolean;
}

const SearchInput = ({ value, size, isDelete, placeholder, onChange, onReset, ...rest }: Props) => {
  //TODO : 검색 완료페이지에 검색창 padding 값이나 font-size 피그마에 없으므로 나중에 추가
  //css 가 많지 않아 따로 css 파일로 분리하지 않음
  const STYLE = {
    small: "rounded-[1.6rem]",
    medium: "rounded-[2.1rem]",
  };
  const sized = STYLE[size];

  return (
    <label className="relative mx-4 flex justify-start">
      <input
        value={value}
        onChange={onChange}
        className={`h-43 w-full bg-light-gray-10 ${sized} pl-22 text-semi-bold text-dark-gray-10 placeholder-gray-10 outline-none`}
        placeholder={placeholder}
        spellCheck={false}
        {...rest}
      />
      {isDelete && (
        <button className="absolute right-46" onClick={onReset}>
          x
        </button>
      )}
      <button className="absolute right-16">s</button>
    </label>
  );
};

export default SearchInput;
