import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SpiderChart = ({ skills }) => {
  // Prepare labels and data for the chart
  const labels = skills.map(skill => skill.skill_name);
  const dataValues = skills.map(skill => skill.proficiency);

  // Chart data configuration
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Skill Proficiency",
        data: dataValues,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          stepSize: 2,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "400px", width: "400px" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpiderChart;