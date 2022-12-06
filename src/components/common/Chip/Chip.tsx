interface ChipProps {
  padding?: number[] | any;
  border?: string;
  height?: string;
  width?: string;
  background?: string;
  children: string;
  borderRadius?: string;
  font?: string;
  color?: string;
}

//rem 으로 변경 필요
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
      className={`${width} h-${height} pl-${padding[0]} pr-${padding[0]} pt-${padding[1]} pb-${padding[1]} leading-[${padding[2]}px] bg-${background} ${border} ${borderRadius} text-${font} text-${color} || ''}`}
    >
      {children}
    </div>
  );
};

//13,8,18 "pl-[13px] pr-[13px] pt-[8px] pb-[8px] leading-[18px]"
Chip.defaultProps = {
  padding: [13, 8, 18],
  borderRadius: "rounded-[16.5px]",
  height: "34",
  width: "w-fit",

  //칩마다 변경되는 부분
  font: "tag",
  background: "dark-gray-10",
  color: "white",
  border: "border='' ",
};
