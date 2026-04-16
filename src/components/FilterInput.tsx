import type { ChangeEvent } from "react";

type Props = {
  filter: string;
  handleFilterChange: (value: string) => void;
};

const FilterInput = ({ filter, handleFilterChange }: Props) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => handleFilterChange(event.target.value);

  return (
    <div className="filter">
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default FilterInput;
