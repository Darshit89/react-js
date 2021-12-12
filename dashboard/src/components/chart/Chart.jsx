import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data }) {
  return (
    <div className="chart">
      <h3 className="charttile">Sales Analysis</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd" />

          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="active user" stroke="#5550BD" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
