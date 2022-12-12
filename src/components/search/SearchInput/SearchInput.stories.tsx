import type { ComponentMeta } from "@storybook/react";

import SearchInput from ".";

export default {
  title: "components/search/searchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

export const MediumSearch = () => <SearchInput placeholder="ex) 최고심" />;
export const SmallSearch = () => <SearchInput placeholder="당신의 밈을 찾아보세요" />;
