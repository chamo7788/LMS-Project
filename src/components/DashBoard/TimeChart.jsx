import React from "react";
import "../../assets/css/DashBoard/barChart.css";
import data from "../../data/BarChartData.json";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export function TimeChart() {
  return (
    <div className="barchart">
      <ResponsiveContainer className="chart" aspect={1.38}>
        Spend Hour Chart
        <BarChart className="bardata" data={data}>
          <XAxis dataKey="day" />
          <YAxis domain={[0, 24]} padding={{ top: 40 }} label="hours"></YAxis>
          <Tooltip />
          <Bar className="bar" dataKey="hours" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
