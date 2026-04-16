import { useState, useEffect } from "react";
// import { coinsMarketsData } from "./apiData/coinsMarketsData";
import type { CoinType } from "./types/CoinType";
import CoinCard from "./components/CoinCard";
import LimitSelector from "./components/LimitSelector";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_CG_DEMO_API_KEY;

const App = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [limit, setLimit] = useState(10);

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

        console.log(data);
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

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}

      <LimitSelector limit={limit} onLimitChange={setLimit2} />

      {!loading && !error && (
        <main className="grid">
          {coins.map((coin) => (
            <CoinCard coin={coin} key={coin.id} />
          ))}
        </main>
      )}
    </div>
  );
};

export default App;
