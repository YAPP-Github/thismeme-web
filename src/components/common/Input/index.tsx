import type { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  size: "small" | "medium";
  placeholder?: string;
  isDelete?: boolean;
}

const Input = ({ size, isDelete, placeholder, ...rest }: InputProps) => {
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
        className={`h-43 w-full bg-light-gray-10 ${sized} pl-22 text-semi-bold text-dark-gray-10 placeholder-gray-10 outline-none`}
        placeholder={placeholder}
        spellCheck={false}
        {...rest}
      />
      {isDelete && <button className="relative right-46">x</button>}
      <button className="relative right-16">s</button>
    </label>
  );
};

export default Input;
