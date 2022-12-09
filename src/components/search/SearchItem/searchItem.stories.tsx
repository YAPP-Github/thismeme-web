import type { ComponentMeta } from "@storybook/react";

import SearchItem from ".";

export default {
  title: "components/search",
  component: SearchItem,
} as ComponentMeta<typeof SearchItem>;

export const majoreSearch = () => (
  <SearchItem searchText="축구" tagName="무한도전축구짤" majorType="예능별" />
);
export const notMajorSearch = () => <SearchItem searchText="무한" tagName="도전무한" />;
