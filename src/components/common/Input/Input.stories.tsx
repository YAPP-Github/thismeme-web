import type { ComponentMeta } from "@storybook/react";

import Input from ".";

export default {
  title: "components/common/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const MediumSearch = () => <Input size="medium" placeholder="ex) 최고심" isDelete={true} />;
export const SmallSearch = () => <Input size="small" isDelete={false} />;
