import { useState, useEffect } from "react";
import { coinsMarketsData } from "./apiData/coinsMarketsData";
import type { CoinType } from "./types/CoinType";
const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const API_KEY = import.meta.env.VITE_CG_DEMO_API_KEY;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL, {
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
        setError(error.message || "unknow error");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();

    /*
    fetch(API_URL, {
      headers: {
        "x-cg-demo-api-key": API_KEY,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
*/
  }, []);

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {coins.map((coin) => (
        <h2 key={coin.id}>{coin.name}</h2>
      ))}
    </div>
  );
};

export default App;
