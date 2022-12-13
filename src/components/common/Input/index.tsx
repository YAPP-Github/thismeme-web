import type { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  endComponents?: ReactNode;
}

function InputBase({ endComponents, ...rest }: Props) {
  return (
    <>
      <input {...rest} />
      {endComponents}
    </>
  );
}

export default InputBase;
