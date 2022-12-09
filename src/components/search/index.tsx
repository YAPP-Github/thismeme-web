import type { HTMLAttributes } from "react";

import { Chip } from "../common/Chip";

interface SearchItemProps extends HTMLAttributes<HTMLDivElement> {
  searchText: string;
  tagName: string;
  majorType?: string;
}

export default function SearchItem({ searchText, tagName, majorType, ...rest }: SearchItemProps) {
  //FIX: 현재는 문자열 처리 로직을 간단하게 두었지만 확장성으로 고려하면 컴포넌트로 분리되거나 바뀔 수 있음

  const index = tagName.search(searchText);
  return (
    <div className="relative flex h-50 w-full items-center pl-11 pr-6 text-semi-bold" {...rest}>
      <span className="pr-10">search</span>
      <span>{tagName.slice(0, tagName.search(searchText))}</span>
      <span className="text-brand">{tagName.slice(index, index + searchText.length)}</span>
      <span>{tagName.slice(index + searchText.length)}</span>
      {majorType && (
        <Chip className="absolute right-6" label={majorType} type="major" size="small" />
      )}
    </div>
  );
}
