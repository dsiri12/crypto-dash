import type { ChangeEvent } from "react";

type Props = {
  limit: number;
  onLimitChange: (limit2: number) => void;
};

// const LimitSelector = (props: Props) => {
//   const {limit, onLimitChange} = props
const LimitSelector = ({ limit, onLimitChange }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value)
    onLimitChange(selectedValue)
  }
  
  return (
    <div className="controls">
      <label htmlFor="limit">Show: </label>

      <select
        value={limit}
        id="limit"
        onChange={handleOnChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default LimitSelector;
