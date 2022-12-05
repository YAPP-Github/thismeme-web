interface ChipProps {
  padding: number[];
  border?: string;
  height?: string;
  width?: string;
  background?: string;
  children: string;
  borderRadius?: string;
  font?: string;
  color?: string;
}

//padding , background, height: 34 border-16.5
export const Chip = ({
  padding,
  background,
  children,
  border,
  height,
  width,
  borderRadius,
  font,
  color,
}: ChipProps) => {
  return (
    <div
      className={`pl-[${padding[0]}px] pr-[${padding[0]}px] pt-[${padding[1]}px] leading-[${padding[2]}px] bg-${background} ${border} ${width} h-${height} rounded-${borderRadius} text-${font} text-${color} || ''}`}
    >
      {children}
    </div>
  );
};

//13,8,18 "pl-[13px] pr-[13px] pt-[8px] pb-[8px] leading-[18px]"
Chip.defaultProps = {
  padding: [13, 8, 18],
  borderRadius: "3xl",
  height: "[34px]",
  width: "w-fit",

  //칩마다 변경되는 부분
  font: "[15px]",
  background: "dark-gray-10",
  color: "white",
  border: "border='' ",
};
