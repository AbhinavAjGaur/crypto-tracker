import React from "react";
import { useSelector } from "react-redux";
import MiniChart from "./MiniChart";

const CryptoTable = () => {
  const data = useSelector((state) => state.crypto);

  return (
    <div className="overflow-auto rounded-lg shadow-md">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Logo</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Symbol</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">1h %</th>
            <th className="px-4 py-3">24h %</th>
            <th className="px-4 py-3">7d %</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">24h Volume</th>
            <th className="px-4 py-3">Circulating Supply</th>
            <th className="px-4 py-3">Max Supply</th>
            <th className="px-4 py-3">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <tr key={coin.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">{index + 1}</td>
              <td className="px-4 py-3">
                <img src={coin.logo} alt={coin.symbol} className="h-6 w-6" />
              </td>
              <td className="px-4 py-3">{coin.name}</td>
              <td className="px-4 py-3">{coin.symbol}</td>
              <td className="px-4 py-3">${coin.price.toLocaleString()}</td>
              <td className={`px-4 py-3 ${coin.percent_1h >= 0 ? "text-green-500" : "text-red-500"}`}>
                {coin.percent_1h}%
              </td>
              <td className={`px-4 py-3 ${coin.percent_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                {coin.percent_24h}%
              </td>
              <td className={`px-4 py-3 ${coin.percent_7d >= 0 ? "text-green-500" : "text-red-500"}`}>
                {coin.percent_7d}%
              </td>
              <td className="px-4 py-3">${coin.market_cap.toLocaleString()}</td>
              <td className="px-4 py-3">${coin.volume_24h.toLocaleString()}</td>
              <td className="px-4 py-3">{coin.circulating_supply}</td>
              <td className="px-4 py-3">{coin.max_supply}</td>
              <td className="px-4 py-3">
                <MiniChart history={coin.history} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
