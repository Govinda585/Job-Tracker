import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "May-01", count: 5 },
  { date: "May-02", count: 8 },
  { date: "May-03", count: 3 },
  { date: "May-04", count: 9 },
  { date: "May-05", count: 2 },
  { date: "May-06", count: 1 },
  { date: "May-07", count: 5 },
  { date: "May-08", count: 10 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" stroke="green" strokeWidth={2} />
        <YAxis stroke="blue" strokeWidth={2} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
