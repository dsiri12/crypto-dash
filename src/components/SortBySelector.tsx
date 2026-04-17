type Props = {
  sortBy: string;
  onSortByChange: (value: string) => void;
};

const SortBySelector = ({ sortBy, onSortByChange }: Props) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortByChange(e.target.value)}
      >
        <option value="market_cap_desc">Market Cap (High To Low)</option>
        <option value="market_cap_asc">Market Cap (Low To High)</option>
      </select>
    </div>
  );
};

export default SortBySelector;
