import { useEffect, useRef } from "react";

interface Props {
  onClose: () => void;
}

export const useCloseModal = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickModalOutside = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) {
        return;
      }
      if (element === event.target) {
        onClose();
      }
    };
    document.addEventListener("click", clickModalOutside);
    return () => {
      document.removeEventListener("click", clickModalOutside);
    };
  }, [onClose]);

  return ref;
};
