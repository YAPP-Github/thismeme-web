import type { ComponentMeta } from "@storybook/react";

import { Chip } from "./Chip";

export default {
  title: "Component/Common/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const RecentSearchChip = () => (
  <Chip background="white" color="gray-20" border="border-solid border-[1px] border-gray-10">
    무한도전
  </Chip>
);

export const TagChip = () => <Chip>박명수</Chip>;

export const MajorTypeChip = () => (
  <Chip
    height="24"
    background="black"
    padding={[7, 5, 14]}
    font="label"
    borderRadius="rounded-[12px]"
  >
    예능별
  </Chip>
);
