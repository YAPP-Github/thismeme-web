import type { HTMLAttributes } from "react";

import { useColoredText } from "@/application/hooks/common/useColoredText";
import Chip from "@/components/common/Chip";

interface SearchItemProps extends HTMLAttributes<HTMLDivElement> {
  searchText: string;
  tagName: string;
  majorType?: string;
}

export default function SearchItem({ searchText, tagName, majorType, ...rest }: SearchItemProps) {
  //FIX: 현재는 문자열 처리 로직을 간단하게 두었지만 확장성으로 고려하면 바뀔 수 있음
  const { ColoredText } = useColoredText({ tagName, searchText });

  return (
    <div className="relative flex h-50 w-full items-center pl-11 pr-6 text-semi-bold" {...rest}>
      <span className="pr-10">search</span>
      {ColoredText}
      {majorType && (
        <Chip className="absolute right-6" label={majorType} type="major" size="small" />
      )}
    </div>
  );
}
