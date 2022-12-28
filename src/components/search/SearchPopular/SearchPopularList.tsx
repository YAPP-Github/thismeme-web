import { usePopularTag } from "@/application/hooks";
import type { Tag } from "@/types";

import { SearchPopularItem } from "./SearchPopularItem";

export const SearchPopularList = () => {
  const { tags } = usePopularTag();

  return (
    <>
      {tags?.map((tag: Tag) => (
        <div key={tag.tagId}>
          <SearchPopularItem name={tag.name} tagId={tag.tagId} />
        </div>
      ))}
    </>
  );
};
