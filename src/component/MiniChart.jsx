import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const MiniChart = ({ history }) => {
  if (!history || history.length === 0) return null;

  const chartData = history.map((price, i) => ({
    day: i,
    price,
  }));

  return (
    <ResponsiveContainer width={80} height={40}>
      <LineChart data={chartData}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MiniChart;
