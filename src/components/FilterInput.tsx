import type { ChangeEvent } from "react";

type Props = {
  filter: string;
  onFilterChange: (value: string) => void;
};

const FilterInput = ({ filter, onFilterChange }: Props) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => onFilterChange(event.target.value);

  return (
    <div className="filter">
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default FilterInput;
