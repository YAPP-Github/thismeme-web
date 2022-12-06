import type { ComponentMeta } from "@storybook/react";

import { Chips } from "./Chip";

export default {
  title: "Component/Common/Chip",
  component: Chips,
} as ComponentMeta<typeof Chips>;

export const RecentSearchChip = () => (
  <Chips background="white" color="gray-20" border="border-solid border-[1px] border-gray-10">
    무한도전
  </Chips>
);

export const TagChip = () => <Chips>박명수</Chips>;

export const MajorTypeChip = () => (
  <Chips
    height="24"
    background="black"
    padding={[7, 5, 14]}
    font="label"
    borderRadius="rounded-[12px]"
  >
    예능별
  </Chips>
);
