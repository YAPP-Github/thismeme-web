import type { ReactNode } from "react";
import { useRef } from "react";

import { ModalPortal } from "./ModalPortal";

interface Props {
  children: ReactNode;
}

export const ModalBase = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ModalPortal>
      <div
        className="z-100 fixed top-0 right-0 bottom-0 left-0 flex items-center bg-[#00000099]"
        ref={ref}
      >
        {props.children}
      </div>
    </ModalPortal>
  );
};
