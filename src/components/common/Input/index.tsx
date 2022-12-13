import type { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  endComponents?: ReactNode;
}

//FIX : forwardRef 적용(추후에 autofocus 등을 위해 ref 사용 고려) , 나중에 Form 추가 고려
function InputBase({ endComponents, ...rest }: Props) {
  return (
    <>
      <input {...rest} />
      {endComponents}
    </>
  );
}

export default InputBase;
