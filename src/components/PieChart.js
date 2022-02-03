import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData, header }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="chat__cont">
      <div className="chart__content">
        <h3>{header}</h3>
      </div>
      <div className="ch">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
}

export default PieChart;
