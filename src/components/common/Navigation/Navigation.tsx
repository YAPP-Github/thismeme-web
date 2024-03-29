import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;

export const Navigation = ({ children, className = "" }: Props) => {
  return (
    <header
      className={`sticky top-0 z-40 flex h-54 w-[calc(100%+3.6rem)] shrink-0 -translate-x-[1.8rem] items-center justify-between border-b border-gray-400 bg-white px-18 ${className}`}
    >
      {children}
    </header>
  );
};

const NavigationLeft = ({ children, className = "" }: Props) => (
  <div
    className={`grid auto-cols-[minmax(3.2rem,auto)] grid-flow-col place-items-center gap-8 ${className}`}
  >
    {children}
  </div>
);
const NavigationRight = ({ children, className = "" }: Props) => (
  <div
    className={`grid auto-cols-[minmax(3.2rem,auto)] grid-flow-col place-items-center gap-8 ${className}`}
  >
    {children}
  </div>
);

const NavigationCenter = ({ children, className = "" }: Props) => (
  <span className={`absolute left-1/2 -translate-x-2/4 text-18-bold-140 ${className}`}>
    {children}
  </span>
);

Navigation.Left = NavigationLeft;
Navigation.Right = NavigationRight;
Navigation.Center = NavigationCenter;
