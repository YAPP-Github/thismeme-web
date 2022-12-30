import type { ReactNode } from "react";

import { useCloseModal } from "@/application/hooks";

import { Portal } from "../Portal";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const ModalBase = ({ children, onClose, ...rest }: Props) => {
  const ref = useCloseModal({ onClose });

  return (
    <Portal id="modal-portal">
      <div className="z-1000 relative flex h-screen w-screen items-center bg-[#00000099]" ref={ref}>
        {children}
      </div>
    </Portal>
  );
};
