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
  <Chip padding={[7, 5, 14]} font="[12px]" borderRadius="[12px]" height="[24px]">
    예능별
  </Chip>
);
