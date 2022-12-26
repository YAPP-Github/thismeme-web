import { usePopularTag } from "@/application/hooks";
import type { SearchResult } from "@/types";

import { SearchPopularItem } from "../../search/SearchPopular/SearchPopularItem";
import { Chip } from "../Chip";

export const PopularTag = ({ type }: { type: string }) => {
  const { tags } = usePopularTag();

  return (
    <>
      {tags?.map((tag: SearchResult) => (
        <div key={tag.tagId}>
          {type === "main" ? (
            <Chip className="mr-8 mb-8" label={tag.name} size="medium" type="recommend" />
          ) : (
            <SearchPopularItem name={tag.name} tagId={tag.tagId} />
          )}
        </div>
      ))}
    </>
  );
};
