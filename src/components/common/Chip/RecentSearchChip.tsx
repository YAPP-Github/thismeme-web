import { Chips } from "./Chip";

interface ChipComponentProps {
  text: string;
}

function RecentSearchChip({ text }: ChipComponentProps) {
  return (
    <>
      <Chips background="white" color="gray-20" border="border-solid border-[1px] border-gray-10">
        {text}
      </Chips>
    </>
  );
}

export default RecentSearchChip;
