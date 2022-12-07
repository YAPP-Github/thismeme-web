import { Chip } from "./Chip";

interface ChipComponentProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

function RecentSearchChip({ label, handleClick }: ChipComponentProps) {
  return (
    <>
      <Chip className={"basic medium recent-search-chip"} label={label} handleClick={handleClick} />
    </>
  );
}

export default RecentSearchChip;
