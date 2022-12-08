import "./Chip.css";

import type { ComponentMeta } from "@storybook/react";

import { Chip } from "./Chip";

export default {
  title: "Component/Common/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

//현재는 사이즈(medium,small)만 분리 ! 디자인 시스템 구축 후 더욱 세분화 될 예정
export const RecentSearchChip = () => (
  <Chip
    className={"medium recent-search-chip"}
    label={"무한도전"}
    handleClick={() => console.log("")}
  />
);

export const RecommendChip = () => (
  <Chip
    className={"medium recommend-search-chip"}
    label={"박명수"}
    handleClick={() => console.log("")}
  />
);

export const MajorTypeChip = () => (
  <Chip className={"small major-type-chip"} label={"예능별"} handleClick={() => console.log("")} />
);
