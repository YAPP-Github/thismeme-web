import type { InputHTMLAttributes } from "react";

import InputBase from "@/components/common/Input";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onReset?: () => void;
}

function SearchInput({ onReset, ...rest }: Props) {
  return (
    <div className="relative mx-4 flex justify-start">
      <InputBase
        className="h-43 w-full rounded-22 bg-light-gray-10 pl-22 text-semi-bold text-dark-gray-10 outline-none placeholder:text-gray-10"
        {...rest}
        endComponents={
          <>
            <button className="absolute right-46" onClick={onReset}>
              x
            </button>
            <button className="absolute right-16">s</button>
          </>
        }
      />
    </div>
  );
}

export default SearchInput;
