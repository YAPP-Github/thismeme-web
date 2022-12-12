import type { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  EndComponents?: ReactNode;
}

function InputBase({ EndComponents, ...rest }: Props) {
  return (
    <>
      <input spellCheck={false} {...rest} />
      {EndComponents}
    </>
  );
}

export default InputBase;
