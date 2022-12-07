interface ChipProps {
  label: string;
  className: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Chip = ({ label, className, handleClick }: ChipProps) => {
  return (
    <div className={className} onClick={handleClick}>
      {label}
    </div>
  );
};
