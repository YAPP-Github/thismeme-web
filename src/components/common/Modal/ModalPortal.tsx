import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

export const ModalPortal = ({ children }: Props) => {
  const portalDiv = document.getElementById("modal");
  if (typeof window === "undefined" || !portalDiv) return null;

  return createPortal(children, portalDiv);
};
