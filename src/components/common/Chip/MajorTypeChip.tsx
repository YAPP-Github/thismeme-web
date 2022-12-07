import { Chip } from "./Chip";

interface ChipComponentProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

function MajorTypeChip({ label, handleClick }: ChipComponentProps) {
  return (
    <>
      <Chip className={"basic small major-type-chip"} label={label} handleClick={handleClick} />
    </>
  );
}

export default MajorTypeChip;
