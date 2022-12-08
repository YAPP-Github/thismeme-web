import { Chip } from "./Chip";

interface ChipComponentProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

function RecentSearchChip({ label, handleClick }: ChipComponentProps) {
  return (
    <>
      <Chip className={"medium recent-search-chip"} label={label} handleClick={handleClick} />
    </>
  );
}

export default RecentSearchChip;
