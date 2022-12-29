import type { ReactNode } from "react";

import { useCloseModal } from "@/application/hooks";

import { ModalPortal } from "./ModalPortal";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const ModalBase = ({ children, onClose, ...rest }: Props) => {
  const ref = useCloseModal({ onClose });

  return (
    <ModalPortal>
      <div
        className="z-100 fixed top-0 right-0 bottom-0 left-0 flex items-center bg-[#00000099]"
        ref={ref}
      >
        {children}
      </div>
    </ModalPortal>
  );
};
