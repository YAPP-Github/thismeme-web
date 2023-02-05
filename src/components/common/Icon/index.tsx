import type { FC, SVGProps } from "react";

import * as Icons from "./assets";

// FIXME classname 동적 할당 문제
const colors = {
  black: "[&_*]:fill-black [&_*]:stroke-black",
  primary: "[&_*]:fill-primary [&_*]:stroke-primary",
  white: "[&_*]:fill-white [&_*]:stroke-white",
  "stroke-white": "[&_*]:stroke-white",
  default: "",
};

export type IconName = keyof typeof Icons;

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName;
  color?: keyof typeof colors;
}
export const Icon = ({ name, color = "default", ...rest }: Props) => {
  const Svg = Icons[name] as FC<SVGProps<SVGSVGElement>>;

  return <Svg className={colors[color]} {...rest} />;
};
