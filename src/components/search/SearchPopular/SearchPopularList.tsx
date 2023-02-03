import Link from "next/link";

import { useGetPopularTags } from "@/application/hooks";
import { PATH } from "@/application/util";

import { SearchPopularItem } from "./SearchPopularItem";

export const SearchPopularList = () => {
  const { tags } = useGetPopularTags();

  return (
    <ul>
      {tags?.map((tag, index) => (
        <li key={tag.tagId}>
          <Link href={PATH.getExploreByTagPath(tag.name)}>
            <SearchPopularItem index={index} name={tag.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
