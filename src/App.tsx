import { useState, useEffect } from "react";
// import { coinsMarketsData } from "./apiData/coinsMarketsData";
import type { CoinType } from "./types/CoinType";
import CoinCard from "./components/CoinCard";
import LimitSelector from "./components/LimitSelector";
import FilterInput from "./components/FilterInput";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_CG_DEMO_API_KEY;

const App = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [limit, setLimit] = useState(10);

  const [filter, setFilter] = useState("");

  const setLimit2 = (limit2: number) => setLimit(limit2);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const url = `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`;

        const res = await fetch(url, {
          headers: {
            "x-cg-demo-api-key": API_KEY,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch data");

        const data = (await res.json()) as CoinType[];

        // console.log(data);
        setCoins(data);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message || "unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [limit]);

  const handleFilterChange = (value: string) => setFilter(value);

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(filter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const showCoins = filteredCoins.length > 0;

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}

      <div className="top-controls">
        <FilterInput filter={filter} handleFilterChange={handleFilterChange} />
        <LimitSelector limit={limit} onLimitChange={setLimit2} />
      </div>

      {!loading && !error && (
        <main className="grid">
          {showCoins &&
            filteredCoins.map((coin) => <CoinCard coin={coin} key={coin.id} />)}

          {!showCoins && <p>No match found.</p>}
        </main>
      )}
    </div>
  );
};

export default App;
