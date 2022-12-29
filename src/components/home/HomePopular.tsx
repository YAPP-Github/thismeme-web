import { usePopularTag } from "@/application/hooks";
import type { Tag } from "@/types";

import { Chip } from "../common/Chip";

export const HomePopular = () => {
  const { tags } = usePopularTag();

  return (
    <>
      {tags?.map((tag: Tag) => (
        <li key={tag.tagId}>
          <Chip className="ml-8 mb-8" label={tag.name} size="medium" type="recommend" />
        </li>
      ))}
    </>
  );
};
